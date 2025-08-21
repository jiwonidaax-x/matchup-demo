import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MatchUp - We connect your expertise",
  description:
    "Professional networking & AI matching platform for freelancers and clients. Connect your expertise with the right opportunities.",
  keywords:
    "freelancer, client, matching, AI, professional networking, digital business card",
  authors: [{ name: "MatchUp Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "MatchUp - We connect your expertise",
    description:
      "Professional networking & AI matching platform for freelancers and clients.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored || (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
