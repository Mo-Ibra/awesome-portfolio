import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import ToggleThemeButton from '@/components/ToggleThemeButton';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const ContactPage = () => {
  return (
    <div>
      <Navbar className="top-2" />
      <div className="h-32 bg-gray-50 dark:bg-gray-900"></div>
      <Contact />
      <ToggleThemeButton />
      <ScrollToTopButton />
    </div>
  )
};

export default ContactPage;