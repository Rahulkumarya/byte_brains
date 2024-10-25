import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/Navbar.css"
import "./styles/Hero.css"
import "./styles/Main.css"
import "./styles/Footer.css"
import { ImOpt } from "react-icons/im";
import Navbar from './Navbar'




const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head/> */}
      {/* <Navbar/> */}
      <body className={inter.className}>
        
        
        {children}
       

        
     
      </body>
    
    </html>
  );
}
