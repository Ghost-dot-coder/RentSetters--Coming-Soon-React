import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import Services from "../components/Services";
import Areas from "../components/Areas";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Areas />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ComingSoon;
