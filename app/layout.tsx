import "./global.css";
import NavLinks from "./ui/dashboard/nav-links";
import { lusitana } from "./ui/font";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className}`}>
        {children}

      </body>
    </html>
  );
}
