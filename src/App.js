import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './components/Header';
import Main from './components/Main';
import Home from './components/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Home />
    </ChakraProvider>
  );
}

export default App;
