# Mohit Pal — Portfolio

A responsive, dark editorial-style portfolio built with React + Vite. Designed around data, Python, machine learning, GenAI, SAP and engineering projects.

## Run locally

1. Install Node.js LTS from https://nodejs.org/
2. Extract this project and open the folder in VS Code.
3. Open Terminal in VS Code and run:

```bash
npm install
npm run dev
```

4. Open the local URL Vite prints (usually `http://localhost:5173`).

## Build and test production output

```bash
npm run build
npm run preview
```

Vite generates the deployable website in `dist/`.

## Deploy to Render

1. Push this project to a GitHub repository.
2. Sign in to https://render.com/
3. Select **New + → Static Site**.
4. Connect the GitHub repository.
5. Set:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
6. Click **Create Static Site**.
7. Render gives you a public `onrender.com` URL and can redeploy automatically after Git pushes.

## Before publishing — personalize these

- Confirm the project descriptions match projects you have actually built.
- Update project GitHub links to specific repositories when possible.
- Add a resume PDF under `public/` and a download link if you want.
- Replace the abstract hero artwork with a real photo only if you prefer.
- Verify your experience, education, skills and current availability.
- Your email, LinkedIn and GitHub are already wired into the site.

## Project structure

```text
mohit-pal-portfolio/
├── index.html
├── package.json
├── public/
└── src/
    ├── main.jsx
    └── styles.css
```
