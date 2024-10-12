
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/eb380a6b56.js" crossOrigin="anonymous" defer></script>
      </head>
      <body
       className="bg-[#3b3635] text-[#eee3e0]"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
