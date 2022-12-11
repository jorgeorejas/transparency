# This is my framework for a SaaS

## What is this?

This is a framework for a SaaS. It is a collection of tools and best practices that I have found useful in building a SaaS. It is not a framework in the sense that it is a set of tools that you can use to build a SaaS. It is a framework in the sense that it is a set of tools that I have found useful in building a SaaS.

This will allow to build a SaaS in a way that is easy to maintain and extend. It will also allow to build a SaaS in a way that is easy to test and deploy.

## Features

- [x] Using the `/app` directory
- [x] Storybook
- [x] Authentication using **NextAuth**
- [x] Database ORM using **Prisma**
- [x] Documentation and Blog Editor powered by **MDX** and **Editor.js**
- [ ] Owner Dashboard
- [ ] Blog
- [ ] UI Components Library (**Radix UI** + **Tremor** )
- [ ] User management and roles using **NextAuth**
- [ ] Payments and Subscriptions using **Stripe**
- [ ] Custom domain & multi-tenancy
- [ ] Loading UI
- [ ] API Routes and Middlewares
- [ ] Blog SEO to improve search engine ranking and Inbound Marketing
- [ ] Dashboard with Business Metrics
- [ ] Docker Ready for Production
- [ ] Responsive Design using **TailwindCSS**
- [ ] Testing tools
- [ ] Vercel OG Image for Social Media
- [ ] Self Hosted Analytics based on **Umami**
- [ ] Self Hosted or Third Party Email
- [ ] Email Templates powered by **MDX** and **Editor.js**
- [ ] Self Hosted or Third Party Database (PostgreSQL)
- [ ] Dark Mode using **TailwindCSS**
- [ ] Invoice Generation using **PDFKit**

## Running Locally

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.

```sh
brew install node yarn
```

1. Install dependencies

```sh
yarn
```

2. Copy the `.env.example` file to `.env.local` and fill in the values.

```sh
cp .env.example .env.local
```

3. Run the development server:

```sh
yarn dev
```
