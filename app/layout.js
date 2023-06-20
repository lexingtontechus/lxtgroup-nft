import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false; //FA config
import { Analytics } from '@vercel/analytics/react';
import { Providers } from "./providers";
import "./index.css";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cal from "./components/cal";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <div className="mb-8">{children}</div>
          <Footer />
          <Cal className="btn rounded-md" />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
