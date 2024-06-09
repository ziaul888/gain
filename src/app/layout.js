import ColorSetup from "@/component/layout/ColorSetup";
import MainLayout from "@/component/layout/MainLayout";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "gain",
    description: "Sass starter package for Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {/*<ColorSetup />*/}
        <MainLayout>{children}</MainLayout>
        </body>
        </html>
    );
}