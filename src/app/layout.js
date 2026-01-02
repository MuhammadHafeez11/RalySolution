import { Nunito_Sans, Open_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans", 
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata = {
  title: "Protem — Product Landing Page Template",
  description: "Let's Keep Your Data Safe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}