
import './App.css';
import { Box
 } from '@chakra-ui/react';

import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {


  return (

    <Box>
    {/* <Nav ref={btnRef}/> */}
    <Main />
    <Routes>
      <Route
        path="/"
      />
    </Routes>
    
    </Box>
  );
}

export default App;
