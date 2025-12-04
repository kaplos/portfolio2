import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import {GoogleAnalytics} from '@next/third-parties/google'
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Portfolio Site",
  description: "A portfolio site that showcases my projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <NavBar />
        {children}
        <GoogleAnalytics gaId="G-C781FE5R05"/>
      </body>
    </html>
  );
}
