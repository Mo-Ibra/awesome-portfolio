import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import ToggleThemeButton from '@/components/ToggleThemeButton';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const ContactPage = () => {
  return (
    <div>
      <Navbar className="top-2" />
      <Contact />
      <ToggleThemeButton />
      <ScrollToTopButton />
    </div>
  )
};

export default ContactPage;