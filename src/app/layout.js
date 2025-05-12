import "./globals.css";

export const metadata = {
  title: "OctavIA - Ton assistant IA pour LinkedIn",
  description: "Deviens visible sur LinkedIn grâce à l'IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
