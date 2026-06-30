import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function MainLayout({ children }) {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Saltar para o conteudo
      </a>
      <Navbar />
      <main id="conteudo">{children}</main>
      <Footer />
    </>
  );
}
