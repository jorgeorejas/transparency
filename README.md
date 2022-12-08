# This is my framework for a SaaS

## What is this?

This is a framework for a SaaS. It is a collection of tools and best practices that I have found useful in building a SaaS. It is not a framework in the sense that it is a set of tools that you can use to build a SaaS. It is a framework in the sense that it is a set of tools that I have found useful in building a SaaS.

This will allow to build a SaaS in a way that is easy to maintain and extend. It will also allow to build a SaaS in a way that is easy to test and deploy.

## Features

-   [x] Using the `/app` directory
-   [x] Storybook
-   [ ] UI Components Library
-   [ ] Database ORM using **Prisma**
-   [ ] Authentication using **NextAuth**
-   [ ] User management and roles using **NextAuth**
-   [ ] Payments and Subscriptions using **Stripe**
-   [ ] Custom domain
-   [ ] Loading UI
-   [ ] API Routes and Middlewares
-   [ ] Documentation and Blog powered by **MDX** and **Editor.js**
-   [ ] Blog SEO to improve search engine ranking and Inbound Marketing
-   [ ] Dashboard with Business Metrics
-   [ ] Docker Ready for Production
-   [ ] Responsive Design using **TailwindCSS**
-   [ ] Testing tools
-   [ ] Dark Mode using **TailwindCSS**
-   [ ] Vercel OG Image for Social Media
-   [ ] Self Hosted Analytics based on **Umami**
-   [ ] Self Hosted or Third Party Email
-   [ ] Email templates powered by **MDX** and **Editor.js**
-   [ ] Self Hosted or Third Party Database (PostgreSQL)

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
