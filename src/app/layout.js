import { Inter } from "next/font/google"
import '@/styles/index.scss'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "IKC",
  description: "Portfolio of Inga Kat Coleman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
