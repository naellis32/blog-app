# Blog App

A multi-page blog built with React, React Router, and Tailwind CSS, deployed on Vercel.

**Live demo:** https://blog-app-three-lime.vercel.app

## Features

- Home page, post list, individual post pages, contact form, and login page
- Client-side routing with React Router, including dynamic routes (`/post/:slug`)
- Dark and light theme toggle that remembers your choice (React Context + localStorage)
- Demo login flow with form validation, using a shared auth context
- Comment form on each post, with state lifted to the post page
- Vercel rewrite config so deep links work in a single-page app

## Tech stack

| Area | Tools |
|---|---|
| Frontend | React 19, React Router |
| Styling | Tailwind CSS 4, PostCSS |
| Build and lint | Vite, Oxlint |
| Hosting | Vercel |

## Project structure

```
src/
  components/   Navbar, CommentForm
  context/      AuthContext (demo login), ThemeContext (dark/light mode)
  data/         posts.js (blog content)
  pages/        Home, BlogPosts, IndividualPost, Contact, Login
```

## Run it locally

```bash
git clone https://github.com/naellis32/blog-app.git
cd blog-app
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## What I learned

- Treating routes as views into state, and reading URL params with `useParams`
- Picking one owner for each piece of state instead of duplicating it between parent and child
- Using Context to share auth and theme state without passing props through every component

## Known limitations

- Login is a front-end demo only. There's no backend, so any username and password of 4+ characters works.
- Comments and contact form submissions aren't saved anywhere yet.
- Posts are stored in a local data file instead of a database or CMS.
