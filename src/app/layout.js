import "./globals.css";
import Header from "@/component/shared/Header";
import Footer from "@/component/shared/Footer";

export const metadata = {
  title: "OctavIA - Ton assistant IA pour LinkedIn",
  description: "Deviens visible sur LinkedIn grâce à l'IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
