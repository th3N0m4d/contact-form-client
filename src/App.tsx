import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="contact1">
      <div className="container-contact1">
        <div className="contact1-pic js-tilt" data-tilt="">
          <img src="images/img-01.png" alt="IMG" />
        </div>

        <form className="contact1-form validate-form">
          <span className="contact1-form-title">Get in touch</span>

          <div
            className="wrap-input1 validate-input"
            data-validate="Name is required"
          >
            <input
              className="input1"
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className="wrap-input1 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              className="input1"
              type="text"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className="wrap-input1 validate-input"
            data-validate="Subject is required"
          >
            <input
              className="input1"
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className="wrap-input1 validate-input"
            data-validate="Message is required"
          >
            <textarea
              className="input1"
              name="message"
              placeholder="Message"
              onChange={handleChange}
              value={form.message}
            ></textarea>
            <span className="shadow-input1"></span>
          </div>

          <div className="container-contact1-form-btn">
            <button className="contact1-form-btn">
              <span>
                Send Email
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
