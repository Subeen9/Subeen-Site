import { Footer } from "./Components/Footer";
import { Navigation } from "./Components/Navigation";
import {Home} from './pages/Home'
import { About } from "./pages/About";
function App() {
  return (
  <>
  <div>
    <Navigation/>
    <Home/>
    <About/>
    <Footer/>
  </div>
  </>
  );
}

export default App;
