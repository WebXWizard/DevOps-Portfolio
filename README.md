# Shahe Alam Portfolio

A responsive personal portfolio website built with React, Vite, and Tailwind CSS. The site presents profile information, technical skills, work experience, projects, education, resume download, social links, and a contact form powered by EmailJS.

## Live Demo

[View Portfolio Live](https://devops-portfolio-kappa.vercel.app/)

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS
- EmailJS
- React Icons
- React Toastify
- React Parallax Tilt

## Features

- Responsive single-page portfolio layout
- Smooth section navigation
- Animated profile intro
- Skills, experience, projects, and education sections
- Project modal with code and live links
- Resume download button
- Contact form with success and error notifications
- Vercel-ready production build

## Project Structure

```text
Portfolio/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- About/
|   |   |-- Contact/
|   |   |-- Education/
|   |   |-- Experience/
|   |   |-- Footer/
|   |   |-- Navbar/
|   |   |-- Skills/
|   |   `-- Work/
|   |-- App.jsx
|   |-- constants.js
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
|-- tailwind.config.js
`-- vite.config.js
```

## Getting Started Locally

### Prerequisites

- Node.js 18 or newer
- npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

By default, this project is configured in `vite.config.js` to run on:

```text
http://localhost:5000
```

If port `5000` is busy, run Vite on another port:

```bash
npm run dev -- --port 5173
```

### Build For Production

```bash
npm run build
```

The production files will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint The Project

```bash
npm run lint
```

## Local Verification Status

The project was checked locally with:

```bash
npm run lint
npm run build
npm run dev -- --host 127.0.0.1 --port 5173
```

Result:

- Lint passed.
- Production build passed.
- Local Vite server returned HTTP `200`.

Note: npm reported dependency audit warnings after dependency installation. Review them with `npm audit` before production maintenance updates.

## EmailJS Contact Form

The contact form is configured in:

```text
src/components/Contact/Contact.jsx
```

Update these values with your own EmailJS credentials when needed:

```js
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form.current,
  "YOUR_PUBLIC_KEY"
);
```

For better security and easier deployment changes, you can move these values into Vite environment variables.

Example `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Vite exposes only variables that start with `VITE_`.

## Deploying On Vercel

### Option 1: Deploy From GitHub

1. Push this project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/).
3. Sign in with GitHub.
4. Click `Add New` and select `Project`.
5. Import the portfolio repository.
6. Use these Vercel settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

7. Add environment variables if you move EmailJS values into `.env`.
8. Click `Deploy`.

### Option 2: Deploy With Vercel CLI

Install Vercel CLI:

```bash
npm install -g vercel
```

Login:

```bash
vercel login
```

Deploy:

```bash
vercel
```

For production deployment:

```bash
vercel --prod
```

## Vercel Environment Variables

If you use EmailJS environment variables, add them in Vercel:

1. Open your project in the Vercel dashboard.
2. Go to `Settings`.
3. Open `Environment Variables`.
4. Add:

```text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

5. Redeploy the project after adding or changing variables.

## Common Deployment Issues

### Blank Page After Deploy

Check that Vercel uses:

```text
Output Directory: dist
```

### Build Fails

Run this locally first:

```bash
npm run build
```

Fix any local build errors before redeploying.

### Contact Form Not Sending

Check:

- EmailJS service ID
- EmailJS template ID
- EmailJS public key
- EmailJS template field names
- Vercel environment variables, if used

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Author

Shahe Alam

- GitHub: [WebXWizard](https://github.com/WebXWizard)
- LinkedIn: [Shahe Alam](https://www.linkedin.com/in/shahe-alam-6a552b320/)
