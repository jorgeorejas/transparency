# Transparency

Transparency is a boilerplate that helps you build your next SaaS product faster than ever before.

<img width="1200" alt="Public Transparency" src="https://user-images.githubusercontent.com/40031461/207564337-c1800939-9c4a-422c-8f8d-3203f7f758c1.png">

## Where can I visit it?

> You can visit the Landing at [t.jorgeorejas.com](https://t.jorgeorejas.com)

> You can visit the Storybook at [sb.t.jorgeorejas.com](https://sb.t.jorgeorejas.com)

## What is this?

This is a boilerplate for a SaaS. It is a collection of tools and best practices that I have found useful in building a SaaS. Everything is open source and free to use. I hope that this will help you build your SaaS faster.

## Features

- [x] Using the `/app` directory
- [x] Storybook
- [x] Authentication using **NextAuth**
- [x] Database ORM using **Prisma**
- [ ] Owner Dashboard

  - [x] Blog Editor powered by **MDX** and **Editor.js**
  - [ ] User management and roles using **NextAuth**
  - [ ] Business Metrics built with **Tremor**
  - [ ] Self Hosted Analytics based on **Umami**
  - [ ] Email Templates powered by **MDX** and **Editor.js**
  - [ ] Email implementation
  - [ ] Images and Files management
  - [ ] Open Startup Page
  
- [ ] Blog

  - [x] Blog Page
  - [ ] Blog SEO to improve search engine ranking and Inbound Marketing

- [ ] Aesthetics

  - [ ] UI Components Library (**Radix UI** + **Tremor** )
  - [ ] Loading UI
  - [ ] Vercel OG Image for Social Media
  - [ ] Dark Mode using **TailwindCSS**
  - [ ] Responsive Design using **TailwindCSS**

- [ ] Dev tools

  - [ ] API Routes and Middlewares
  - [ ] Docker Ready for Production
  - [ ] Testing tools
  - [ ] CLI for Choosing Features

## How to use

### Modify pages & Menus

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
