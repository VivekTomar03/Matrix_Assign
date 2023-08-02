import React from "react";
import { Box, Input, Button, Text, Grid, Card, Flex } from "@chakra-ui/react";
import "./rightcontaint.css";
const RightContent = ({ data }) => {
  // console.log(data);
  return (
    <Box
      ml={{ base: "0px", md: "278px" }}
      className="main-container"
      width={{ base: "100%", md: "100%" }}
     
      height={"auto"}
    >
      <Box
        p={4}
        display={{ base: "block", md: "flex" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Input
          width={"435px"}
          height={"50px"}
          placeholder="Search"
          mb={{ base: 4, md: 0 }}
        />
        <Button colorScheme="blue">Connect</Button>
      </Box>
      <Text ml={4} color={"white"} fontSize="lg" fontWeight="bold" my={4}>
        Data Cards:
      </Text>

      <Grid gap={10}>
        {data.map((el) => {
          return (
            <Grid
              key={Date.now() + Math.random()}
              gridTemplateColumns="repeat(4, 1fr)"
              gap={10}
            >
              <Card  pt={4}  className="SingleCard" bg="#390554" color="white">
                <Text mb={"12px"} className="headtext" ml={"32px"}>
                  Basic Info
                </Text>
                <Flex flexDirection={["column", "row"]}>
                  <Text mb={"8px"} className="textleft" ml={"32px"}>
                    Pair Created at
                  </Text>
                  <Text ml={"52px"}>{el?.baseToken?.name.substring(0, 8)}</Text>
                </Flex>
                <Flex flexDirection={["column", "row"]}>
                  <Text mb={"8px"} className="textleft" ml={"32px"}>
                    Symbol
                  </Text>
                  <Text ml={"108px"}>{el?.baseToken?.symbol}</Text>
                </Flex>
                <Flex flexDirection={["column", "row"]}>
                  <Text mb={"8px"} className="textleft" ml={"32px"}>
                    Dex ID
                  </Text>
                  <Text ml={"116px"}>#{el?.dexId.substring(0, 4)}</Text>
                </Flex>
                <Flex flexDirection={["column", "row"]}>
                  <Text mb={"8px"} className="textleft" ml={"32px"}>
                    Pair Address
                  </Text>
                  <Text ml={"71px"}>#{el?.pairAddress.substring(0, 4)}</Text>
                </Flex>
              </Card>

              <Card  pt={6}  className="SingleCard" bg="#390554" color="white">
                <Text className="headtext" ml={"32px"} mb={"12px"}>
                  Basic Token
                </Text>
                <Flex flexDirection={["column", "row"]}>
                  <Text className="textleft" ml={"32px"}>
                    Name
                  </Text>
                  <Text ml={"117px"}>{el?.baseToken?.name.substring(0, 8)}</Text>
                </Flex>
                <Flex flexDirection={["column", "row"]}>
                  <Text className="textleft" ml={"32px"}>
                    Symbol
                  </Text>
                  <Text ml={"108px"}>{el?.baseToken?.symbol}</Text>
                </Flex>
        
                <Flex flexDirection={["column", "row"]}>
                  <Text className="textleft" ml={"32px"}>
                    Address
                  </Text>
                  <Text ml={"100px"}>#{el?.pairAddress.substring(0, 4)}</Text>
                </Flex>
              </Card>


              <Card  pt={6}  className="SingleCard" bg="#390554" color="white">
                <Text className="headtext" ml={"32px"} mb={"12px"}>
                  Quote Token
                </Text>
                <Flex flexDirection={["column", "row"]}>
                  <Text className="textleft" ml={"32px"}>
                    Name
                  </Text>
                  <Text ml={"117px"}>{el?.quoteToken?.name.substring(0, 8)}</Text>
                </Flex>
                <Flex flexDirection={["column", "row"]}>
                  <Text className="textleft" ml={"32px"}>
                    Symbol
                  </Text>
                  <Text ml={"108px"}>{el?.quoteToken?.symbol}</Text>
                </Flex>
        
                <Flex flexDirection={["column", "row"]}>
                  <Text className="textleft" ml={"32px"}>
                    Address
                  </Text>
                  <Text ml={"100px"}>#{el?.pairAddress.substring(0, 4)}</Text>
                </Flex>
              </Card>

              <Card  pt={6}  className="SingleCard" bg="#390554" color="white">
                <Text className="headtext" ml={"32px"} mb={"12px"}>
                  Price
                </Text>
                <Flex flexDirection={["column", "row"]}>
                  <Text className="textleft" ml={"32px"}>
                    Price Native
                  </Text>
                  <Text ml={"77px"}>{el?.priceNative}</Text>
                </Flex>
                <Flex flexDirection={["column", "row"]}>
                  <Text className="textleft" ml={"32px"}>
                    Symbol
                  </Text>
                  <Text ml={"108px"}>{el?.priceUsd}</Text>
                </Flex>
        
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default RightContent;
