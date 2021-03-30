import './App.css';


import MyNavbar from "./components/navbar/navbar";
import MyCarousel from './components/carousel/carousel';
import About from './pages/about';
import Contact from './pages/contact/contact';
import Title from './components/title';
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Skills from "./pages/skills/skills";

import Slide from "react-reveal/Slide";
import Projects from './pages/projects/projects';


const App=()=> {
  return (
    <div className="App" style={{position:"relative"}}>
      <MyCarousel/>
      <Title/>
      <MyNavbar/>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./images/laptop1.webp")}
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

            
          </Fade>
        </Container>
      </div>
      </div>
      
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Contact />
        </Fade>
      </Container>
     
    </div>
  );
}

export default App;
