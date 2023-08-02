import React from "react";
import {
  Box,
  Tabs,
  Tab,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  Flex,
} from "@chakra-ui/react";
import "./Sidebar.css";

const MobileSidebar = ({ isOpen, onClose, active, setactive }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent
          bg="#292929"
          width="288px"
          height="982px"
          top="1px"
          border-radius="0px 32px 32px 0px"
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <Tabs isFitted variant="enclosed">
              <Tab>
                <Flex justifyContent="center" alignItems="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="30"
                    viewBox="0 0 26 30"
                    fill="#FFF;"
                  >
                    <path
                      d="M8.66667 14.6667C9.37391 14.6667 10.0522 14.3857 10.5523 13.8856C11.0524 13.3855 11.3333 12.7072 11.3333 12C11.3333 11.2928 11.0524 10.6145 10.5523 10.1144C10.0522 9.61429 9.37391 9.33333 8.66667 9.33333C7.95942 9.33333 7.28115 9.61429 6.78105 10.1144C6.28095 10.6145 6 11.2928 6 12C6 12.7072 6.28095 13.3855 6.78105 13.8856C7.28115 14.3857 7.95942 14.6667 8.66667 14.6667ZM12.6667 0L25.3333 7.33333V22L12.6667 29.3333L0 22V7.33333L12.6667 0ZM2.66667 8.87067V20.4627L5.82933 22.2933L16.5933 14.4L22.6667 18.0453V8.872L12.6667 3.08L2.66667 8.87067Z"
                      fill="#FFF"
                    />
                  </svg>
                  <Text className="heading">NFTIfy</Text>
                </Flex>
              </Tab>
            </Tabs>
          </DrawerHeader>
          <DrawerBody>
            <Tabs isFitted variant="enclosed">
              <Tab
                bg={active ? "#F30050" : "#292929"}
                onClick={() => setactive(!active)}
              >
                <Flex justifyContent="center" alignItems="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                  >
                    <path
                      d="M16.97 4.43L9 0L1.03 4.43L6.1 7.24C6.83 6.48 7.86 6 9 6C10.14 6 11.17 6.48 11.9 7.24L16.97 4.43ZM7 10C7 8.9 7.9 8 9 8C10.1 8 11 8.9 11 10C11 11.1 10.1 12 9 12C7.9 12 7 11.1 7 10ZM8 19.44L0 15V6.14L5.13 8.99C5.04 9.31 5 9.65 5 10C5 11.86 6.27 13.43 8 13.87V19.44ZM10 19.44V13.87C11.73 13.43 13 11.86 13 10C13 9.65 12.96 9.31 12.87 8.99L18 6.14V15L10 19.44Z"
                      fill="#FFF"
                    />
                  </svg>
                  <Text className="address">Token Address</Text>
                </Flex>
              </Tab>
              <Tab
                bg={!active ? "#F30050" : "#292929"}
                onClick={() => setactive(!active)}
              >
                <Flex justifyContent="center" alignItems="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="30"
                    viewBox="0 0 26 30"
                    fill="white"
                  >
                    <path
                      d="M8.66667 14.6667C9.37391 14.6667 10.0522 14.3857 10.5523 13.8856C11.0524 13.3855 11.3333 12.7072 11.3333 12C11.3333 11.2928 11.0524 10.6145 10.5523 10.1144C10.0522 9.61429 9.37391 9.33333 8.66667 9.33333C7.95942 9.33333 7.28115 9.61429 6.78105 10.1144C6.28095 10.6145 6 11.2928 6 12C6 12.7072 6.28095 13.3855 6.78105 13.8856C7.28115 14.3857 7.95942 14.6667 8.66667 14.6667ZM12.6667 0L25.3333 7.33333V22L12.6667 29.3333L0 22V7.33333L12.6667 0ZM2.66667 8.87067V20.4627L5.82933 22.2933L16.5933 14.4L22.6667 18.0453V8.872L12.6667 3.08L2.66667 8.87067Z"
                      fill="#FFF"
                    />
                  </svg>
                  <Text className="address">Pair Address</Text>
                </Flex>
              </Tab>
            </Tabs>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default MobileSidebar;
