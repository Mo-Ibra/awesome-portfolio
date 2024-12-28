import Navbar from '@/components/Navbar';
import Introduction from '@/components/Introduction';
import Tools from '@/components/Tools';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import ToggleThemeButton from '@/components/ToggleThemeButton';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const AboutPage = () => {
  return (
    <div>
      <Navbar className="top-2" />
      <Introduction />
      <Tools />
      <Achievements />
      <Contact />
      <ToggleThemeButton />
      <ScrollToTopButton />
    </div>
  )
};

export default AboutPage;