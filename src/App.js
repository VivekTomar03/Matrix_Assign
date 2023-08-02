import React, { useEffect, useState } from 'react';
import { ChakraProvider, Container, Input, Button, VStack, IconButton, useMediaQuery , Flex} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import axios from "axios"
// import  "./App.css"

import MobileSidebar from './Components/MobileSidebar';
import Sidebar from './Components/Sidebar';
import RightContent from './Pages/RightContent';
 

const App = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [active, setactive] = useState(true)
  const [data , setdata] = useState([])
  const [inputText , setinputText] = useState("0x2170Ed0880ac9A755fd29B2688956BD959F933F8")
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  useEffect(() => {
     axios.get(`https://api.dexscreener.com/latest/dex/tokens/${inputText}`)
     .then((res) => {
         setdata(res.data.pairs)
     })
  },[])

  return (
    <Flex  flexDirectionn={[ "column","row"]}>
    <VStack  alignItems="flex-start">
      {isMobile ? (
        <IconButton
          icon={<HamburgerIcon />}
          onClick={toggleMobileSidebar}
          alignSelf="flex-end"
          variant="ghost"
        />
      ) : (
        <Sidebar active={active} setactive={ setactive }/>
      )}
    </VStack>
    {isMobile && (
      <MobileSidebar isOpen={isMobileSidebarOpen} onClose={toggleMobileSidebar} active={active} setactive={ setactive } />
    )}
    <RightContent data={data}/>
  </Flex>
  );
};

export default App;