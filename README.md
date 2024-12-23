This is a tool to generate a PDF-friendly webpage resume from JSON.

## Getting Started

First, copy `src/resume.example.ts` to `src/resume.ts`

```bash
cp src/resume.example.ts src/resume.ts
```

Add your avatar to `public/images`.

Run the development server

```bash
npm i
npm run dev
```

Saving as PDF is as easy as clicking the browser's Print button.
If you'd like to generate a page-break free version - adjust the height (2nd parameter) of the `size` property in `src/sass/main.sass` otherwise comment the rule out.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Since the application depends on the gitignored `src/resume.ts` file it is advised to deploy from your command line

```bash
npm i -g vercel
vercel login
vercel build --prod
vercel deploy --prebuilt --prod
```
