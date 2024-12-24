import Navbar from "@/components/Navbar";
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Tools from '@/components/Tools';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

function Home() {

  return (
    <div>
      <Navbar className="top-2" />
      <Header />
      <AboutMe />
      <Tools />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;