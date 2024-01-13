import { Footer } from "./Components/Footer";
import { Navigation } from "./Components/Navigation";
import {Home} from './pages/Home'
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import {Contact} from './pages/Contact'
import '../src/App.css'
import {Link} from 'react-scroll'
function App() {
  return (
  <>
    <Navigation/>
    <Link to='home' smooth={true} duration={1000}><Home/></Link>
      <Link to='about' smooth={true} duration={1000}><About/></Link>
      <Link to='projects' smooth={true} duration={1000}><Projects/></Link>
      <Link to='contact' smooth={true} duration={1000}><Contact/></Link>
     <Footer/>

  </>
  );
}

export default App;
