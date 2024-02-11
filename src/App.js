import { Footer } from "./Components/Footer";
import { Navigation } from "./Components/Navigation";
import { Home } from './pages/Home';
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from './pages/Contact';
import '../src/App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from "@mui/material";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
  const handleSwitchChange = () => {
    console.log("function called")
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper>
          <Navigation dark={darkMode} lightMode={handleSwitchChange} />
          <Home dark={darkMode}/>
          <About />
          <Projects  dark={darkMode}/>
          <Contact />
          <Footer />
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
