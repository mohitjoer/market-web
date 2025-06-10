# 🏍️ Market Web

A full-stack marketplace platform built using **Next.js 15**, **TypeScript**, **MongoDB**, and **Clerk Authentication**. This app allows users to create, manage, and delete product listings (spots) with a clean, responsive UI and robust backend API routes.

## 🚀 Features

* ✅ App Router (Next.js 15)
* 📟 RESTful API Routes (`app/api/`)
* 🔐 Authentication via Clerk
* 📂 MongoDB with Mongoose
* 💡 TypeScript for type safety
* 📦 Bun for ultra-fast package management
* 🎯 SEO-friendly dynamic routing
* 🌐 Deployed on Vercel

---

## 📁 Folder Structure

```
market-web/
├── app/                   # Next.js app router
│   └── api/spot/[spotId]  # API Routes (GET, PUT, DELETE)
├── components/            # Reusable UI components
├── mongo/                 # DB connection and models
│   ├── db.ts              # MongoDB connection utility
│   └── model/
│       └── spot.ts        # Mongoose schema
├── public/                # Static assets
├── styles/                # Global CSS
├── middleware.ts          # Clerk + Auth middleware
├── .env.local             # Environment variables
└── README.md
```

---

## 💠 Tech Stack

* **Framework:** [Next.js 15](https://nextjs.org/)
* **Language:** TypeScript
* **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas)
* **ORM:** Mongoose
* **Authentication:** [Clerk](https://clerk.dev/)
* **Package Manager:** [Bun](https://bun.sh/)
* **Hosting:** [Vercel](https://vercel.com/)

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mohitjoer/market-web.git
cd market-web
```

### 2. Install dependencies

```bash
bun install
```

### 3. Create a `.env.local` file

```env
MONGODB_URI=your_mongodb_uri
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### 4. Run the development server

```bash
bun run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧪 API Endpoints

| Method | Route                | Description         |
| ------ | -------------------- | ------------------- |
| GET    | `/api/spot/[spotId]` | Get a specific spot |
| PUT    | `/api/spot/[spotId]` | Update a spot       |
| DELETE | `/api/spot/[spotId]` | Delete a spot       |

All routes are protected using Clerk middleware.

---

## 🔐 Authentication

Clerk is integrated using `middleware.ts` and handles public/private routes.

To modify public routes:

```ts
const isPublicRoute = (url: URL) =>
  ["/", "/sign-in", "/sign-up"].includes(url.pathname);
```

---

## 📦 Deployment

This project is deployed on **Vercel**.

To deploy your own version:

1. Push to GitHub
2. Connect your repo on [vercel.com](https://vercel.com/)
3. Set environment variables in Vercel dashboard
4. Deploy!

---

## 🙌 Contributing

PRs are welcome! If you find a bug or have a feature request, open an issue or pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👋 Connect

Follow the creator [**Mohit Joe**](https://github.com/mohitjoer)
Instagram: [codecraft.with.jo](https://www.instagram.com/codecraft.with.jo/)
Discord: [FreeLanceBase](https://discord.gg/BEWKtSEAcx)

---
