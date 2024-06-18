import { Inter } from "next/font/google"
import '@/styles/index.scss'
import KatProvider from "@/providers/KatProvider";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "IKC",
  description: "Portfolio of Inga Kat Coleman",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <KatProvider>
          {children}
        </KatProvider>
      </body>
    </html>
  );
}
