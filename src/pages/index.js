import About from "../components/about";
import Cover from "../components/cover";
//import Dashboard from "../components/dashboard";
import Footer from "../components/footer";
import Touch from "../components/get_in_touch";
import Navbar from "../components/navbar";
import Projects from "../components/projects";


function Home() {
  return (
    <div className="root_container">
      <Navbar />
      <Cover />
      <About />
      <Projects />
      <Touch />
      <Footer />

    </div>
  );
}

export default Home;
