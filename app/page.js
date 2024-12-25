import Navbar from "@/components/Navbar";
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Tools from '@/components/Tools';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ToggleThemeButton from '@/components/ToggleThemeButton';
import ScrollToTopButton from '@/components/ScrollToTopButton';

function Home() {

  return (
    <div>
      <Navbar className="top-2" />
      <Header />
      <AboutMe />
      <Tools />
      <Projects />
      <Contact />
      <ToggleThemeButton />
      <ScrollToTopButton />
    </div>
  );
}

export default Home;