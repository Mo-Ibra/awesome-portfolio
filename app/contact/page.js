import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import ToggleThemeButton from '@/components/ToggleThemeButton';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Tools from '@/components/Tools';

const ContactPage = () => {
  return (
    <div>
      <Navbar className="top-2" />
      <Tools />
      <Contact />
      <ToggleThemeButton />
      <ScrollToTopButton />
    </div>
  )
};

export default ContactPage;