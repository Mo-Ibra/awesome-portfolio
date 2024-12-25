import Navbar from "@/components/Navbar";

import ToggleThemeButton from '@/components/ToggleThemeButton';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Articles from "@/components/Articles";
import Contact from '@/components/Contact';

const Blog = () => {
  return (
    <div>
      <Navbar className="top-2" />
      <Articles />
      <Contact />
      <ToggleThemeButton />
      <ScrollToTopButton />
    </div>
  );
};

export default Blog;
