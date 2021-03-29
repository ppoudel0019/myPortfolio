import './App.css';
import MyNavbar from "./components/navbar/navbar";
import MyCarousel from './components/carousel/carousel';

import Title from './components/title';

const App=()=> {
  return (
    <div className="App">
      <MyCarousel/>
      
      <Title/>
      <MyNavbar/>
      

      
    </div>
  );
}

export default App;
