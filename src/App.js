import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Container,
  Input,
  Button,
  VStack,
  IconButton,
  useMediaQuery,
  Flex,
  Box,
  background,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import axios from "axios";
// import  "./App.css"

import MobileSidebar from "./Components/MobileSidebar";
import Sidebar from "./Components/Sidebar";
import RightContent from "./Pages/RightContent";

const App = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [active, setactive] = useState(true);
  const [data, setdata] = useState([]);
  const [inputText, setinputText] = useState(
    "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
  );
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  useEffect(() => {
    let apiurl = `https://api.dexscreener.com/latest/dex/tokens/${
      inputText || "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
    }`;
    if (active) {
      apiurl = `https://api.dexscreener.com/latest/dex/tokens/${
        inputText || "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
      }`;
    }
    if (!active) {
      apiurl = `https://api.dexscreener.com/latest/dex/search?q=${
        inputText || "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
      }`;
    }
    axios
      .get(apiurl)
      .then((res) => {
        if (res.data.pairs) {
          setdata(res?.data?.pairs);
        }
      })
      .catch((err) => console.log(err));
  }, [inputText]);

  return (
    <>
      <Flex height={"90%"} flexDirectionn={["column", "row"]}>
        <VStack alignItems="flex-start">
          {isMobile ? (
            <IconButton
              icon={<HamburgerIcon />}
              onClick={toggleMobileSidebar}
              alignSelf="flex-end"
              variant="ghost"
            />
          ) : (
            <Sidebar active={active} setactive={setactive} />
          )}
        </VStack>
        {isMobile && (
          <MobileSidebar
            isOpen={isMobileSidebarOpen}
            onClose={toggleMobileSidebar}
            active={active}
            setactive={setactive}
          />
        )}
        <RightContent data={data} active={active} setinputText={setinputText} />
      </Flex>
      <Box
        py={4}
        bottom={0}
        style={{
          position: "fixed",

          width: "100%",
          height: "80px",
          backgroundColor: "#F30050",
          margin: "auto",
          zIndex: 10000,

          marginTop: "350px",
        }}
      ></Box>
    </>
  );
};

export default App;
