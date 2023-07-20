import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import Navbar from './Source/Components/Navbar';
import Home from './Source/Pages/Home';
import About from './Source/Pages/About';
import Skills from './Source/Pages/Skills';
import Projects from './Source/Pages/Projects';
import Contact from './Source/Pages/Contact';

import { RandomGradientColor } from './Source/Utility/Helper';
import Footer from './Source/Components/Footer';

function App() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 
  
  return (
    <ChakraProvider theme={theme}>
      {/*  bg={'blackAlpha.800'} color="white" textShadow={'white'} */}
      <Box >  
        <Navbar />
        
          <Home height={screenHeight} />
          <About height={screenHeight} />
          <Skills height={screenHeight} />
          <Projects height={screenHeight} />

          <Contact height={screenHeight} />

        <Footer />
        

      </Box>
    </ChakraProvider>
  );
}

export default App;
