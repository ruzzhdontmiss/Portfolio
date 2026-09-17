import './globals.css';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'Rushat Yadav — Full-Stack & AI/ML Engineer',
  description:
    'Portfolio of Rushat Yadav — Full-Stack engineer with production experience across TypeScript, Python, and applied ML.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
