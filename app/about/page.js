import Navbar from '@/components/Navbar';
import ToggleThemeButton from '@/components/ToggleThemeButton';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const AboutPage = () => {
  return (
    <div>
      <Navbar className="top-2" />
      <h1>About</h1>
      <ToggleThemeButton />
      <ScrollToTopButton />
    </div>
  )
};

export default AboutPage;