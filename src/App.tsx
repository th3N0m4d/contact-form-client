import { useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_PATH}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Email sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact1">
      <div className="container-contact1">
        <div className="contact1-pic js-tilt" data-tilt="">
          <img src="images/img-01.png" alt="IMG" />
        </div>

        <form className="contact1-form" onSubmit={handleSubmit}>
          <span className="contact1-form-title">Get in touch</span>

          <div className="wrap-input1 ">
            <input
              className="input1"
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              minLength={2}
              disabled={loading}
            />
            <span className="shadow-input1"></span>
          </div>

          <div className="wrap-input1 ">
            <input
              className="input1"
              type="email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <span className="shadow-input1"></span>
          </div>

          <div className="wrap-input1 ">
            <input
              className="input1"
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              minLength={2}
              disabled={loading}
            />
            <span className="shadow-input1"></span>
          </div>

          <div className="wrap-input1">
            <textarea
              className="input1"
              name="message"
              placeholder="Message"
              onChange={handleChange}
              value={form.message}
              required
              minLength={10}
              disabled={loading}
            ></textarea>
            <span className="shadow-input1"></span>
          </div>

          <div className="container-contact1-form-btn">
            <button className="contact1-form-btn" disabled={loading}>
              <span>
                {loading ? (
                  <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
                ) : (
                  <>
                    Send Email
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </>
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
