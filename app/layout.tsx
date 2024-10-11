
import Navbar from "./components/Navbar";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className="bg-[#3b3635] text-[#eee3e0]"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
