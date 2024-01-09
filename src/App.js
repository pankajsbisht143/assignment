import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { Flex } from '@chakra-ui/react';
import Home from './components/Home';

import { useState } from 'react';
import ResNav from './components/ResNav';



function App() {
  const[category,setCategory]=useState('Category-1')
  return (
    <div className="App">
    <ResNav />
    <Flex>
    <Sidebar setCategory={setCategory}/>
    <Home category={category}/>
    </Flex>
      
      
    </div>
  );
}

export default App;
