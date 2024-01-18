import { Footer } from "./Components/Footer";
import { Navigation } from "./Components/Navigation";
import {Home} from './pages/Home'
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import {Contact} from './pages/Contact'
import '../src/App.css'
function App() {
  return (
  <>
    <Navigation/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
     <Footer/>

  </>
  );
}

export default App;
