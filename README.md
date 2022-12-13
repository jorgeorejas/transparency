# Transparency

Transparency is a boilerplate that helps you build your next SaaS product faster than ever before.

## What is this?

This is a boilerplate for a SaaS. It is a collection of tools and best practices that I have found useful in building a SaaS. Everything is open source and free to use. I hope that this will help you build your SaaS faster.

## Features

- [x] Using the `/app` directory
- [x] Storybook
- [x] Authentication using **NextAuth**
- [x] Database ORM using **Prisma**
- [x] Documentation and Blog Editor powered by **MDX** and **Editor.js**
- [x] Blog
- [ ] Payments and Subscriptions using **Stripe**
- [ ] Owner Dashboard
- [ ] UI Components Library (**Radix UI** + **Tremor** )
- [ ] User management and roles using **NextAuth**
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
- [ ] CLI for Choosing Features

## How to use

### Modify pages & Menus

Some of the pages are generated from the data on the config files, also applies to the menus.

- `config/marketing.ts` - Marketing pages and menus
- `config/owner.ts` - Owner pages and menus
- `config/page.ts` - Meta data for the pages

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
