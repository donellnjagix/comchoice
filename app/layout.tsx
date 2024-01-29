
import Nav from "./components/navbar/Nav";

import TopStrip from "./TopBar";
import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Comchoice",
  description: "ENGINEERED SOLUTIONS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={font.className}>
        <TopStrip />
        <Nav />
        {children}
       
      </body>
    </html>
  );
}