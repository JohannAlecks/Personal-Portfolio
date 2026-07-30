# Portfolio — Johann Alecksandrei G. Factora

A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my background, skills, experience, and contact information as a junior developer.

## Live Demo

- Demo: https://your-domain.vercel.app

## Features

- Responsive hero section with a polished personal introduction
- About section highlighting education and experience
- Qualifications section with interactive tabs for skills, certifications, and education
- Experience section with a clean layout for internships and growth
- Contact section with a working form integration
- Modern dark UI with subtle animations and glassmorphism styling

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Installation

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Run the development server
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 in your browser

## Usage

- Update your personal content in the section components under app/components/sections
- Replace placeholder links and contact details as needed
- Add real project content when you have completed more work

## Project Structure

```text
app/
  components/
    sections/        # Page sections such as hero, about, contact, and qualifications
    dashboard/       # Dashboard demo components
  dashboard/         # Dashboard route
  globals.css        # Global styles
  layout.tsx         # Root layout
  page.tsx           # Home page
public/              # Static assets
```

## What I Learned

- How to structure a Next.js portfolio project for clarity and maintainability
- How to build reusable section components in a production-style app
- How to improve layout and user experience with responsive design and motion
- How to present technical growth in a realistic and recruiter-friendly way

## Future Improvements

- Connect the contact form to a reliable backend or email service
- Add blog or writing content to show deeper thinking
- Improve SEO with metadata, Open Graph images, and structured content

## Recommended Commit Messages

- feat: add interactive qualifications tabs
- feat: add projects section to portfolio homepage
- style: improve dark glassmorphism UI and spacing
- docs: add professional README for portfolio project
- refactor: reorganize components into section-based structure
- fix: update contact form wiring and email display
