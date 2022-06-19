import Navbar from "./Navbar";
import HeroBanner from "./HeroBanner";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <main>{children}</main>
      <Footer />
    </>
  );
}
