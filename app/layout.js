import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Kashfi Ajaz - Senior Software Developer",
  description:
    "SAFe® Certified Senior Software Engineer with 4+ years in the Fintech & Banking domain, specialising in Java, Spring Boot, Node.js and Microservices. Proven success in AI/ML solutions (GenAI-Hakathon Deutsche-Bank) and Trade Finance (CGI-Trade360). Experienced in end-to-end release management, having delivered 12+ releases with 100% on-time delivery. Skilled in CI/CD, cloud-native development, and process automation, building scalable systems using REST/GraphQL APIs and automated testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
