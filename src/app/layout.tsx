import "./css/page.module.css";
import { configApp } from "@/app/config/config.app";

export const metadata = configApp;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        {children}
      </body>
    </html>
  );
};