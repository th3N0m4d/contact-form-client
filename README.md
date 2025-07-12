# Contact Form API + Frontend 📨 ⚡️

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/th3N0m4d/contact-form-client)
[![AWS Lambda](https://img.shields.io/badge/AWS-Lambda-orange?logo=aws-lambda&logoColor=white)](https://aws.amazon.com/lambda/)
[![Serverless](https://img.shields.io/badge/Serverless-Framework-FD5750?logo=serverless&logoColor=white)](https://www.serverless.com/)
[![Vite](https://img.shields.io/badge/Vite-4.x-blueviolet?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Status](https://img.shields.io/badge/status-production--ready-brightgreen)]()

A full-stack, production-ready contact form powered by:

- ⚡️ **AWS Lambda** & **SES** for serverless email delivery
- ⚙️ **Serverless Framework** for infrastructure as code
- 🎯 **React + Vite + TypeScript** frontend deployed on **Vercel**
- 🔐 CORS-safe, env-configurable, and cloud-native by design

---

## ✨ Live Demo

📍 [Frontend on Vercel](https://contact-form-client-kappa.vercel.app/)  
📬 [Deployed API Endpoint](https://x335lse7rl.execute-api.eu-central-1.amazonaws.com/contact)

---

## 🛠️ Tech Stack

| Layer         | Tech                                                                                                                                                |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend      | [React](https://reactjs.org/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)                                           |
| Backend       | [AWS Lambda](https://aws.amazon.com/lambda/), [SES](https://aws.amazon.com/ses/), [Node.js](https://nodejs.org/)                                    |
| Dev Tools     | [Serverless Framework](https://www.serverless.com/), [Vercel](https://vercel.com/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) |
| Infra as Code | `serverless.yml` based deployment with CORS & IAM policies                                                                                          |
| CI/CD         | Vercel auto-deploy from `main` branch                                                                                                               |

---

## 🔐 Environment Variables

| Variable       | Where             | Purpose                            |
| -------------- | ----------------- | ---------------------------------- |
| `VITE_API_URL` | Frontend (Vercel) | Points to deployed Lambda endpoint |

Example `.env` for local dev:

```env
VITE_API_URL=http://localhost:3003/contact
```

---

## 📁 Project Structure

```
└── 📁contact-form-client
    └── 📁lambda                # Server
        ├── handler.ts
        ├── package-lock.json
        ├── package.json
        ├── serverless.yml
        ├── tsconfig.json
    └── 📁public
    └── 📁src                   # Client
        ├── App.tsx
        ├── main.tsx
        ├── vite-env.d.ts
    ├── .env
```

---

## 🧪 Testing Locally

### 🧩 Backend

```bash
npm run dev
```

Hit the endpoint:

```bash
curl -X POST http://localhost:3003/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Eddie","email":"test@example.com","subject":"Ping","message":"Yo"}'
```

### 🎨 Frontend

```bash
cd contact-form-client
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Deploy to Production

### 🔼 Deploy Lambda:

```bash
npm run deploy:prod
```

### 🚀 Deploy Frontend:

Push to `main` → Vercel auto-builds and deploys
Or use the Vercel UI

---

## 🧠 Use Cases

- 🔧 Template for event-driven AWS applications
- 🧪 Sandbox for learning Serverless + SES
- 🌍 Contact gateway for portfolios, SaaS apps, or product sites

---

## 📬 TODOs / Improvements

- [ ] Add reCAPTCHA or hCaptcha for spam filtering
- [ ] Switch SES to production mode
- [ ] Add rate limiting via API Gateway or Lambda middleware
- [ ] Deploy to multiple regions

---

## 🧑‍💻 Author

Made with ❤️ and AWS by [Eddie](https://edielton-dantas.me/)

---

## 🛑 License

MIT — use, remix, and deploy freely.
