import Container from "./components/Container";
import SideBar from "./components/SideBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Insights",
  description: "Made by Subodh Khanal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <SideBar></SideBar>
          <Container childComponent={children}>
          </Container>
        </div>
      </body>
    </html>
  );
}
