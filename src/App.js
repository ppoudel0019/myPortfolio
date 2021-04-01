import './App.css';
import MyNavbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import MyCarousel from './components/carousel/carousel';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Title from './components/title';
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Skills from "./pages/skills/skills";
import Projects from "./pages/projects/Projects";
import Slide from "react-reveal/Slide";



const App=()=> {
  return (
    <div className="App" style={{position:"relative"}}>
      <MyCarousel/>
   <Title />
      <MyNavbar/>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./images/background.jpg")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>

          </div>
        </Parallax>
        <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Skills />
          </Fade>
        </Container>
      </div>
      </div>
      
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
         <Projects />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Contact />
        </Fade>
      </Container>
      <Footer />
     
    </div>
  );
}

export default App;
