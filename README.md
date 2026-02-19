# prisma-express-postgres-REST-API 
This project was built as part of the Udemy course: Step by Step guide to build Restful APIs with Node.Js, Prisma ORM, Postgres, Sqlite and Typescript. <br />

--

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)

---

## 🧠 About

This project is a clean, modular REST API that manages **Courses**, **Instructors**, **Users**, and **Videos** — complete with relational data modeling, structured migrations, and middleware-based authentication. 

Whether you're learning how Prisma handles one-to-one and one-to-many relationships, or you just need a solid Express boilerplate to riff on, you've come to the right repo.

---

## ✨ Features

- **🔗 Fully Relational Data Model** — Courses, Videos, Instructors, and Users are wired together with Prisma's type-safe schema, including one-to-one and one-to-many relationships. Your data integrity is in good hands.
- **🧭 Organized Migration History** — Every schema evolution is tracked, versioned, and named. 
- **🛡️ Middleware-Based Auth** — Authentication logic lives in its own lane (`middlewares/auth.ts`), keeping your route handlers clean and your security concerns properly separated.
- **⚡ Ultra-Lightweight Storage** — Powered by SQLite via Prisma, making it dead simple to run locally with zero external database setup.
- **🧱 Modular Handler Architecture** — Route logic is split across dedicated handlers (`course.ts`, `instructor.ts`, `user.ts`, `video.ts`) — because a 2,000-line `index.ts` is a war crime.
- **🔷 TypeScript Throughout** — Fully typed from router to database layer. If it compiles, it (probably) works.

---

## 🛠️ Tech Stack

| Layer       | Technology          |
|-------------|---------------------|
| Runtime     | Node.js             |
| Language    | TypeScript          |
| Framework   | Express.js          |
| ORM         | Prisma              |
| Database    | SQLite (`dev.db`)   |

---

## 📦 Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository

```bash
git clone https://github.com/XSaintX/prisma_express_postgres.git
cd your-repo-name
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Copy the example env file and configure it as needed:

```bash
cp .env.example .env
```

Update `.env` with your settings (e.g., `DATABASE_URL`):

```env
DATABASE_URL="file:./prisma_sqlite/dev.db"
```
Note: The project was made using prisma_sqlite originally it was called prisma but I renamed this folder because in the course they created a postgres database and to preserve all migrations I renamed this folder. 

### Run Prisma Migrations

Apply the existing migration history to initialize your local database:

```bash
npx prisma migrate deploy
```

Or, if you're in active development and want to apply + generate:

```bash
npx prisma migrate dev
```

### Generate Prisma Client

```bash
npx prisma generate
```

---

## 🚀 Usage

### Start the Development Server

```bash
npm run dev
```

The API will be live at `http://localhost:3000` (or whichever port is defined in your config).

