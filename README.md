# Portfolio

Personal portfolio site for Jatin Gehlot — full-stack developer. Dark-themed, built with Next.js (App Router) and Tailwind CSS.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Deployed as a standalone Docker image

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Content (experience, projects, skills) lives in [`src/lib/data.ts`](src/lib/data.ts).

## Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

Uses Next.js `output: "standalone"` for a minimal production image.
