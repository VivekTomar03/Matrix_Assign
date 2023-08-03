import React from "react";
import {
  Box,
  Input,
  Button,
  Text,
  Grid,
  Card,
  Flex,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import "./rightcontaint.css";
const RightContent = ({ data, active, setinputText }) => {
  console.log(data);
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
        <InputGroup width={["200px", "450px"]} height={"50px"}>
          <Input
            className="searchbar"
            // width={"400px"}
            // height={"50px"}

            placeholder={`Search`}
            mb={{ base: 4, md: 0 }}
            color={"white"}
            onChange={(e) => setinputText(e.target.value)}
          ></Input>
          <InputRightElement mr={5}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="white"
            >
              <path
                d="M7.2365 4.37598e-08C8.61202 -0.000151186 9.9591 0.391678 11.1199 1.12959C12.2808 1.8675 13.2073 2.92092 13.7909 4.16646C14.3746 5.412 14.5912 6.79807 14.4154 8.1623C14.2396 9.52653 13.6787 10.8124 12.7984 11.8693L17.79 16.8609C17.8766 16.9413 17.94 17.0436 17.9733 17.157C18.0066 17.2704 18.0088 17.3907 17.9795 17.5052C17.9502 17.6197 17.8906 17.7242 17.8069 17.8076C17.7233 17.8911 17.6186 17.9504 17.504 17.9794C17.3897 18.0087 17.2695 18.0067 17.1562 17.9735C17.0429 17.9403 16.9406 17.8772 16.8601 17.7908L11.8685 12.7992C10.9753 13.5429 9.91608 14.0606 8.78051 14.3084C7.64494 14.5562 6.46639 14.5268 5.34455 14.2229C4.22272 13.9189 3.19059 13.3492 2.33549 12.5619C1.48039 11.7747 0.82746 10.7931 0.431939 9.70022C0.0364171 8.60731 -0.0900637 7.43521 0.0631954 6.28307C0.216454 5.13094 0.644945 4.03266 1.31242 3.08114C1.9799 2.12962 2.86672 1.35285 3.89788 0.816543C4.92905 0.280232 6.07421 0.000153495 7.2365 4.37598e-08ZM1.31495 7.23739C1.31495 8.01501 1.46811 8.78502 1.7657 9.50345C2.06328 10.2219 2.49946 10.8747 3.04933 11.4245C3.5992 11.9744 4.25199 12.4106 4.97042 12.7081C5.68886 13.0057 6.45887 13.1589 7.2365 13.1589C8.01413 13.1589 8.78415 13.0057 9.50258 12.7081C10.221 12.4106 10.8738 11.9744 11.4237 11.4245C11.9735 10.8747 12.4097 10.2219 12.7073 9.50345C13.0049 8.78502 13.1581 8.01501 13.1581 7.23739C13.1581 5.66691 12.5342 4.16075 11.4237 3.05026C10.3132 1.93976 8.807 1.31589 7.2365 1.31589C5.66601 1.31589 4.15984 1.93976 3.04933 3.05026C1.93882 4.16075 1.31495 5.66691 1.31495 7.23739Z"
                fill="white"
              />
            </svg>
          </InputRightElement>
        </InputGroup>
        <button className="connect">Connect</button>
      </Box>
      <Text ml={4} color={"white"} fontSize="lg" fontWeight="bold" my={4}>
        {active ? "Token Search Result" : "Pair Search Result"}
      </Text>

      {active ? (
        <Grid ml={3} gap={8}>
          {data.length > 0 &&
            data
              ?.sort((a, b) => a.priceNative - b.priceNative)
              .map((el) => {
                return (
                  <Grid
                    key={Date.now() + Math.random()}
                    templateColumns="repeat(auto-fill, minmax(290px, 1fr))"
                    gap={"5px"}
                  >
                    <Card
                      pt={4}
                      className="SingleCard"
                      bg="#390554"
                      color="white"
                    >
                      <Text mb={"12px"} className="headtext" ml={"32px"}>
                        Basic Info
                      </Text>
                      <Flex flexDirection={["row", "row"]}>
                        <Text mb={"8px"} className="textleft" ml={"32px"}>
                          Pair Created at
                        </Text>
                        <Text ml={"52px"}>
                          {el?.baseToken?.name.substring(0, 8)}
                        </Text>
                      </Flex>
                      <Flex flexDirection={["row", "row"]}>
                        <Text mb={"8px"} className="textleft" ml={"32px"}>
                          Symbol
                        </Text>
                        <Text ml={"92px"}>{el?.baseToken?.symbol}</Text>
                      </Flex>
                      <Flex flexDirection={["row", "row"]}>
                        <Text mb={"8px"} className="textleft" ml={"32px"}>
                          Dex ID
                        </Text>
                        <Text ml={"98px"}>#{el?.dexId.substring(0, 4)}</Text>
                      </Flex>
                      <Flex flexDirection={["row", "row"]}>
                        <Text mb={"8px"} className="textleft" ml={"32px"}>
                          Pair Address
                        </Text>
                        <Text ml={"68px"}>
                          #{el?.pairAddress.substring(0, 4)}
                        </Text>
                        <Box ml={"35px"}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="56"
                            height="52"
                            viewBox="0 0 56 56"
                            fill="none"
                          >
                            <circle cx="28" cy="28" r="28" fill="#960252" />
                            <svg
                              x={9}
                              xmlns="http://www.w3.org/2000/svg"
                              width="35"
                              height="58"
                              viewBox="0 0 24 24"
                              fill="#960252"
                            >
                              <path
                                d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                                fill="white"
                              />
                            </svg>
                          </svg>
                        </Box>
                      </Flex>
                    </Card>

                    <Card
                      pt={6}
                      className="SingleCard"
                      bg="#390554"
                      color="white"
                    >
                      <Text className="headtext" ml={"32px"} mb={"12px"}>
                        Basic Token
                      </Text>
                      <Flex flexDirection={["row", "row"]}>
                        <Text className="textleft" ml={"32px"}>
                          Name
                        </Text>
                        <Text ml={"117px"}>
                          {el?.baseToken?.name.substring(0, 8)}
                        </Text>
                      </Flex>
                      <Flex flexDirection={["row", "row"]}>
                        <Text className="textleft" ml={"32px"}>
                          Symbol
                        </Text>
                        <Text ml={"108px"}>{el?.baseToken?.symbol}</Text>
                      </Flex>

                      <Flex flexDirection={["row", "row"]}>
                        <Text className="textleft" ml={"32px"}>
                          Address
                        </Text>
                        <Text ml={"100px"}>
                          #{el?.pairAddress.substring(0, 4)}
                        </Text>
                      </Flex>
                      <Flex justifyContent={"flex-end"} mr={5}>
                        <svg
                          x={50}
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="52"
                          viewBox="0 0 56 56"
                          fill="none"
                        >
                          <circle cx="28" cy="28" r="28" fill="#960252" />
                          <svg
                            x={9}
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="52"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 22L3 17V7L12 2L21 7V17L12 22ZM9.1 9.25C9.48333 8.85 9.925 8.54167 10.425 8.325C10.925 8.10833 11.45 8 12 8C12.55 8 13.075 8.10833 13.575 8.325C14.075 8.54167 14.5167 8.85 14.9 9.25L17.9 7.575L12 4.3L6.1 7.575L9.1 9.25ZM11 19.15V15.875C10.1 15.6417 9.375 15.1667 8.825 14.45C8.275 13.7333 8 12.9167 8 12C8 11.8167 8.00833 11.6457 8.025 11.487C8.04167 11.3283 8.075 11.166 8.125 11L5 9.25V15.825L11 19.15ZM12 14C12.55 14 13.021 13.804 13.413 13.412C13.805 13.02 14.0007 12.5493 14 12C14 11.45 13.804 10.979 13.412 10.587C13.02 10.195 12.5493 9.99933 12 10C11.45 10 10.979 10.196 10.587 10.588C10.195 10.98 9.99933 11.4507 10 12C10 12.55 10.196 13.021 10.588 13.413C10.98 13.805 11.4507 14.0007 12 14ZM13 19.15L19 15.825V9.25L15.875 11C15.925 11.1667 15.9583 11.3293 15.975 11.488C15.9917 11.6467 16 11.8173 16 12C16 12.9167 15.725 13.7333 15.175 14.45C14.625 15.1667 13.9 15.6417 13 15.875V19.15Z"
                              fill="white"
                            />
                          </svg>
                        </svg>
                      </Flex>
                    </Card>

                    <Card
                      pt={6}
                      className="SingleCard"
                      bg="#390554"
                      color="white"
                    >
                      <Text className="headtext" ml={"32px"} mb={"12px"}>
                        Quote Token
                      </Text>
                      <Flex flexDirection={["row", "row"]}>
                        <Text className="textleft" ml={"32px"}>
                          Name
                        </Text>
                        <Text ml={"117px"}>
                          {el?.quoteToken?.name.substring(0, 8)}
                        </Text>
                      </Flex>
                      <Flex flexDirection={["row", "row"]}>
                        <Text className="textleft" ml={"32px"}>
                          Symbol
                        </Text>
                        <Text ml={"108px"}>{el?.quoteToken?.symbol}</Text>
                      </Flex>

                      <Flex flexDirection={["row", "row"]}>
                        <Text className="textleft" ml={"32px"}>
                          Address
                        </Text>
                        <Text ml={"100px"}>
                          #{el?.pairAddress.substring(0, 4)}
                        </Text>
                      </Flex>
                      <Flex justifyContent={"flex-end"} mr={5}>
                        <svg
                          x={50}
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="52"
                          viewBox="0 0 56 56"
                          fill="none"
                        >
                          <circle cx="28" cy="28" r="28" fill="#960252" />
                          <svg
                            x={9}
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="52"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 22L3 17V7L12 2L21 7V17L12 22ZM9.1 9.25C9.48333 8.85 9.925 8.54167 10.425 8.325C10.925 8.10833 11.45 8 12 8C12.55 8 13.075 8.10833 13.575 8.325C14.075 8.54167 14.5167 8.85 14.9 9.25L17.9 7.575L12 4.3L6.1 7.575L9.1 9.25ZM11 19.15V15.875C10.1 15.6417 9.375 15.1667 8.825 14.45C8.275 13.7333 8 12.9167 8 12C8 11.8167 8.00833 11.6457 8.025 11.487C8.04167 11.3283 8.075 11.166 8.125 11L5 9.25V15.825L11 19.15ZM12 14C12.55 14 13.021 13.804 13.413 13.412C13.805 13.02 14.0007 12.5493 14 12C14 11.45 13.804 10.979 13.412 10.587C13.02 10.195 12.5493 9.99933 12 10C11.45 10 10.979 10.196 10.587 10.588C10.195 10.98 9.99933 11.4507 10 12C10 12.55 10.196 13.021 10.588 13.413C10.98 13.805 11.4507 14.0007 12 14ZM13 19.15L19 15.825V9.25L15.875 11C15.925 11.1667 15.9583 11.3293 15.975 11.488C15.9917 11.6467 16 11.8173 16 12C16 12.9167 15.725 13.7333 15.175 14.45C14.625 15.1667 13.9 15.6417 13 15.875V19.15Z"
                              fill="white"
                            />
                          </svg>
                        </svg>
                      </Flex>
                    </Card>

                    <Card
                      pt={6}
                      className="SingleCard"
                      bg="#390554"
                      color="white"
                    >
                      <Text className="headtext" ml={"32px"} mb={"12px"}>
                        Price
                      </Text>
                      <Flex flexDirection={["row", "row"]}>
                        <Text className="textleft" ml={"32px"}>
                          Price Native
                        </Text>
                        <Text ml={"77px"}>{el?.priceNative}</Text>
                      </Flex>
                      <Flex flexDirection={["row", "row"]}>
                        <Text className="textleft" ml={"32px"}>
                          Symbol
                        </Text>
                        <Text ml={"108px"}>{el?.priceUsd}</Text>
                      </Flex>
                      <Flex justifyContent={"flex-end"} mr={5} mt={5}>
                        <svg
                          x={50}
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="52"
                          viewBox="0 0 56 56"
                          fill="none"
                        >
                          <circle cx="28" cy="28" r="28" fill="#960252" />
                          <svg
                            x={9}
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="52"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.47621 6.84C8.81501 7.3356 8.51621 7.9296 8.51621 8.484C8.51621 9.0396 8.81501 9.6336 9.47621 10.1304C10.1386 10.6272 11.1082 10.9704 12.2302 10.9704C12.5485 10.9704 12.8537 11.0968 13.0787 11.3219C13.3038 11.5469 13.4302 11.8521 13.4302 12.1704C13.4302 12.4887 13.3038 12.7939 13.0787 13.0189C12.8537 13.244 12.5485 13.3704 12.2302 13.3704C10.639 13.3704 9.15221 12.888 8.03621 12.0504C6.92021 11.2128 6.11621 9.9648 6.11621 8.4852C6.11621 7.0044 6.92021 5.7564 8.03621 4.9188C9.15221 4.0824 10.6402 3.6 12.2302 3.6C14.6938 3.6 17.023 4.7796 17.9494 6.744C18.0166 6.88661 18.0551 7.04107 18.0626 7.19855C18.0701 7.35603 18.0465 7.51345 17.9932 7.66182C17.9399 7.81019 17.8579 7.9466 17.7518 8.06327C17.6458 8.17995 17.5178 8.27459 17.3752 8.3418C17.2326 8.40901 17.0781 8.44747 16.9207 8.45499C16.7632 8.46251 16.6058 8.43893 16.4574 8.38561C16.309 8.33229 16.1726 8.25027 16.0559 8.14423C15.9393 8.0382 15.8446 7.91021 15.7774 7.7676C15.3574 6.8712 14.047 6 12.2314 6C11.1094 6 10.1386 6.3432 9.47621 6.84Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5883 17.4996C15.2495 17.004 15.5471 16.41 15.5471 15.8556C15.5471 15.3 15.2495 14.7048 14.5871 14.2092C13.9259 13.7124 12.9551 13.3692 11.8343 13.3692C11.516 13.3692 11.2108 13.2428 10.9858 13.0177C10.7607 12.7927 10.6343 12.4875 10.6343 12.1692C10.6343 11.8509 10.7607 11.5457 10.9858 11.3207C11.2108 11.0956 11.516 10.9692 11.8343 10.9692C13.4255 10.9692 14.9123 11.4516 16.0283 12.2892C17.1443 13.1268 17.9471 14.3748 17.9471 15.8544C17.9471 17.334 17.1443 18.5832 16.0271 19.4196C14.9111 20.2572 13.4255 20.7396 11.8343 20.7396C9.3707 20.7396 7.0403 19.56 6.1151 17.5944C5.97936 17.3065 5.96354 16.9765 6.07111 16.677C6.17868 16.3775 6.40084 16.1329 6.6887 15.9972C6.97657 15.8615 7.30657 15.8456 7.6061 15.9532C7.90563 16.0608 8.15016 16.2829 8.2859 16.5708C8.7083 17.4684 10.0187 18.3396 11.8343 18.3396C12.9563 18.3396 13.9259 17.9964 14.5883 17.4996ZM11.9999 1.2C12.3182 1.2 12.6234 1.32643 12.8484 1.55147C13.0735 1.77651 13.1999 2.08174 13.1999 2.4V3.6C13.1999 3.91826 13.0735 4.22348 12.8484 4.44853C12.6234 4.67357 12.3182 4.8 11.9999 4.8C11.6816 4.8 11.3764 4.67357 11.1514 4.44853C10.9263 4.22348 10.7999 3.91826 10.7999 3.6V2.4C10.7999 2.08174 10.9263 1.77651 11.1514 1.55147C11.3764 1.32643 11.6816 1.2 11.9999 1.2Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.9998 19.2C12.3181 19.2 12.6233 19.3264 12.8483 19.5515C13.0734 19.7765 13.1998 20.0817 13.1998 20.4V21.6C13.1998 21.9183 13.0734 22.2235 12.8483 22.4485C12.6233 22.6736 12.3181 22.8 11.9998 22.8C11.6815 22.8 11.3763 22.6736 11.1513 22.4485C10.9262 22.2235 10.7998 21.9183 10.7998 21.6V20.4C10.7998 20.0817 10.9262 19.7765 11.1513 19.5515C11.3763 19.3264 11.6815 19.2 11.9998 19.2Z"
                              fill="white"
                            />
                          </svg>
                        </svg>
                      </Flex>
                    </Card>
                  </Grid>
                );
              })}
        </Grid>
      ) : (
        <Grid ml={6}>
          {data.length > 0 &&
            data?.slice(0, 1)?.map((el) => {
              return (
                <Grid
                  key={Date.now() + Math.random()}
                  templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                  gap={2}
                >
                  <Card
                    pt={4}
                    className="SingleCard"
                    bg="#390554"
                    color="white"
                    paddingBottom={4}
                  >
                    <Text mb={"12px"} className="headtext" ml={"32px"}>
                      Basic Info
                    </Text>
                    <Flex flexDirection={["row", "row"]}>
                      <Text mb={"8px"} className="textleft" ml={"32px"}>
                        Pair Created at
                      </Text>
                      <Text ml={"52px"}>
                        {el?.baseToken?.name.substring(0, 8)}
                      </Text>
                    </Flex>
                    <Flex flexDirection={["row", "row"]}>
                      <Text mb={"8px"} className="textleft" ml={"32px"}>
                        Symbol
                      </Text>
                      <Text ml={"92px"}>{el?.baseToken?.symbol}</Text>
                    </Flex>
                    <Flex flexDirection={["row", "row"]}>
                      <Text mb={"8px"} className="textleft" ml={"32px"}>
                        Dex ID
                      </Text>
                      <Text ml={"97px"}>#{el?.dexId.substring(0, 4)}</Text>
                    </Flex>
                    <Flex flexDirection={["row", "row"]}>
                      <Text mb={"8px"} className="textleft" ml={"32px"}>
                        Pair Address
                      </Text>
                      <Text ml={"68px"}>
                        #{el?.pairAddress.substring(0, 4)}
                      </Text>
                      <Box ml={"35px"}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="52"
                          viewBox="0 0 56 56"
                          fill="none"
                        >
                          <circle cx="28" cy="28" r="28" fill="#960252" />
                          <svg
                            x={9}
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="58"
                            viewBox="0 0 24 24"
                            fill="#960252"
                          >
                            <path
                              d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                              fill="white"
                            />
                          </svg>
                        </svg>
                      </Box>
                    </Flex>
                  </Card>

                  <Card
                    pt={6}
                    className="SingleCard"
                    bg="#390554"
                    color="white"
                  >
                    <Text className="headtext" ml={"32px"} mb={"12px"}>
                      Basic Token
                    </Text>
                    <Flex flexDirection={["row", "row"]}>
                      <Text className="textleft" ml={"32px"}>
                        Name
                      </Text>
                      <Text ml={"117px"}>
                        {el?.baseToken?.name.substring(0, 8)}
                      </Text>
                    </Flex>
                    <Flex flexDirection={["row", "row"]}>
                      <Text className="textleft" ml={"32px"}>
                        Symbol
                      </Text>
                      <Text ml={"108px"}>{el?.baseToken?.symbol}</Text>
                    </Flex>

                    <Flex flexDirection={["row", "row"]}>
                      <Text className="textleft" ml={"32px"}>
                        Address
                      </Text>
                      <Text ml={"100px"}>
                        #{el?.pairAddress.substring(0, 4)}
                      </Text>
                    </Flex>
                    <Flex justifyContent={"flex-end"} mr={5}>
                        <svg
                          x={50}
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="52"
                          viewBox="0 0 56 56"
                          fill="none"
                        >
                          <circle cx="28" cy="28" r="28" fill="#960252" />
                          <svg
                            x={9}
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="52"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 22L3 17V7L12 2L21 7V17L12 22ZM9.1 9.25C9.48333 8.85 9.925 8.54167 10.425 8.325C10.925 8.10833 11.45 8 12 8C12.55 8 13.075 8.10833 13.575 8.325C14.075 8.54167 14.5167 8.85 14.9 9.25L17.9 7.575L12 4.3L6.1 7.575L9.1 9.25ZM11 19.15V15.875C10.1 15.6417 9.375 15.1667 8.825 14.45C8.275 13.7333 8 12.9167 8 12C8 11.8167 8.00833 11.6457 8.025 11.487C8.04167 11.3283 8.075 11.166 8.125 11L5 9.25V15.825L11 19.15ZM12 14C12.55 14 13.021 13.804 13.413 13.412C13.805 13.02 14.0007 12.5493 14 12C14 11.45 13.804 10.979 13.412 10.587C13.02 10.195 12.5493 9.99933 12 10C11.45 10 10.979 10.196 10.587 10.588C10.195 10.98 9.99933 11.4507 10 12C10 12.55 10.196 13.021 10.588 13.413C10.98 13.805 11.4507 14.0007 12 14ZM13 19.15L19 15.825V9.25L15.875 11C15.925 11.1667 15.9583 11.3293 15.975 11.488C15.9917 11.6467 16 11.8173 16 12C16 12.9167 15.725 13.7333 15.175 14.45C14.625 15.1667 13.9 15.6417 13 15.875V19.15Z"
                              fill="white"
                            />
                          </svg>
                        </svg>
                      </Flex>
                  </Card>

                  <Card
                    pt={6}
                    className="SingleCard"
                    bg="#390554"
                    color="white"
                  >
                    <Text className="headtext" ml={"32px"} mb={"12px"}>
                      Quote Token
                    </Text>
                    <Flex flexDirection={["row", "row"]}>
                      <Text className="textleft" ml={"32px"}>
                        Name
                      </Text>
                      <Text ml={"117px"}>
                        {el?.quoteToken?.name.substring(0, 8)}
                      </Text>
                    </Flex>
                    <Flex flexDirection={["row", "row"]}>
                      <Text className="textleft" ml={"32px"}>
                        Symbol
                      </Text>
                      <Text ml={"108px"}>{el?.quoteToken?.symbol}</Text>
                    </Flex>

                    <Flex flexDirection={["row", "row"]}>
                      <Text className="textleft" ml={"32px"}>
                        Address
                      </Text>
                      <Text ml={"100px"}>
                        #{el?.pairAddress.substring(0, 4)}
                      </Text>
                    </Flex>
                    <Flex justifyContent={"flex-end"} mr={5}>
                        <svg
                          x={50}
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="52"
                          viewBox="0 0 56 56"
                          fill="none"
                        >
                          <circle cx="28" cy="28" r="28" fill="#960252" />
                          <svg
                            x={9}
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="52"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 22L3 17V7L12 2L21 7V17L12 22ZM9.1 9.25C9.48333 8.85 9.925 8.54167 10.425 8.325C10.925 8.10833 11.45 8 12 8C12.55 8 13.075 8.10833 13.575 8.325C14.075 8.54167 14.5167 8.85 14.9 9.25L17.9 7.575L12 4.3L6.1 7.575L9.1 9.25ZM11 19.15V15.875C10.1 15.6417 9.375 15.1667 8.825 14.45C8.275 13.7333 8 12.9167 8 12C8 11.8167 8.00833 11.6457 8.025 11.487C8.04167 11.3283 8.075 11.166 8.125 11L5 9.25V15.825L11 19.15ZM12 14C12.55 14 13.021 13.804 13.413 13.412C13.805 13.02 14.0007 12.5493 14 12C14 11.45 13.804 10.979 13.412 10.587C13.02 10.195 12.5493 9.99933 12 10C11.45 10 10.979 10.196 10.587 10.588C10.195 10.98 9.99933 11.4507 10 12C10 12.55 10.196 13.021 10.588 13.413C10.98 13.805 11.4507 14.0007 12 14ZM13 19.15L19 15.825V9.25L15.875 11C15.925 11.1667 15.9583 11.3293 15.975 11.488C15.9917 11.6467 16 11.8173 16 12C16 12.9167 15.725 13.7333 15.175 14.45C14.625 15.1667 13.9 15.6417 13 15.875V19.15Z"
                              fill="white"
                            />
                          </svg>
                        </svg>
                      </Flex>
                  </Card>

                  <Card
                    pt={6}
                    className="SingleCard"
                    bg="#390554"
                    color="white"
                  >
                    <Text className="headtext" ml={"32px"} mb={"12px"}>
                      Price
                    </Text>
                    <Flex flexDirection={["row", "row"]}>
                      <Text className="textleft" ml={"32px"}>
                        Price Native
                      </Text>
                      <Text ml={"77px"}>{el?.priceNative}</Text>
                    </Flex>
                    <Flex flexDirection={["row", "row"]}>
                      <Text className="textleft" ml={"32px"}>
                        Symbol
                      </Text>
                      <Text ml={"108px"}>{el?.priceUsd}</Text>
                    </Flex>
                    <Flex justifyContent={"flex-end"} mr={5} mt={5}>
                        <svg
                          x={50}
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="52"
                          viewBox="0 0 56 56"
                          fill="none"
                        >
                          <circle cx="28" cy="28" r="28" fill="#960252" />
                          <svg
                            x={9}
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="52"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.47621 6.84C8.81501 7.3356 8.51621 7.9296 8.51621 8.484C8.51621 9.0396 8.81501 9.6336 9.47621 10.1304C10.1386 10.6272 11.1082 10.9704 12.2302 10.9704C12.5485 10.9704 12.8537 11.0968 13.0787 11.3219C13.3038 11.5469 13.4302 11.8521 13.4302 12.1704C13.4302 12.4887 13.3038 12.7939 13.0787 13.0189C12.8537 13.244 12.5485 13.3704 12.2302 13.3704C10.639 13.3704 9.15221 12.888 8.03621 12.0504C6.92021 11.2128 6.11621 9.9648 6.11621 8.4852C6.11621 7.0044 6.92021 5.7564 8.03621 4.9188C9.15221 4.0824 10.6402 3.6 12.2302 3.6C14.6938 3.6 17.023 4.7796 17.9494 6.744C18.0166 6.88661 18.0551 7.04107 18.0626 7.19855C18.0701 7.35603 18.0465 7.51345 17.9932 7.66182C17.9399 7.81019 17.8579 7.9466 17.7518 8.06327C17.6458 8.17995 17.5178 8.27459 17.3752 8.3418C17.2326 8.40901 17.0781 8.44747 16.9207 8.45499C16.7632 8.46251 16.6058 8.43893 16.4574 8.38561C16.309 8.33229 16.1726 8.25027 16.0559 8.14423C15.9393 8.0382 15.8446 7.91021 15.7774 7.7676C15.3574 6.8712 14.047 6 12.2314 6C11.1094 6 10.1386 6.3432 9.47621 6.84Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5883 17.4996C15.2495 17.004 15.5471 16.41 15.5471 15.8556C15.5471 15.3 15.2495 14.7048 14.5871 14.2092C13.9259 13.7124 12.9551 13.3692 11.8343 13.3692C11.516 13.3692 11.2108 13.2428 10.9858 13.0177C10.7607 12.7927 10.6343 12.4875 10.6343 12.1692C10.6343 11.8509 10.7607 11.5457 10.9858 11.3207C11.2108 11.0956 11.516 10.9692 11.8343 10.9692C13.4255 10.9692 14.9123 11.4516 16.0283 12.2892C17.1443 13.1268 17.9471 14.3748 17.9471 15.8544C17.9471 17.334 17.1443 18.5832 16.0271 19.4196C14.9111 20.2572 13.4255 20.7396 11.8343 20.7396C9.3707 20.7396 7.0403 19.56 6.1151 17.5944C5.97936 17.3065 5.96354 16.9765 6.07111 16.677C6.17868 16.3775 6.40084 16.1329 6.6887 15.9972C6.97657 15.8615 7.30657 15.8456 7.6061 15.9532C7.90563 16.0608 8.15016 16.2829 8.2859 16.5708C8.7083 17.4684 10.0187 18.3396 11.8343 18.3396C12.9563 18.3396 13.9259 17.9964 14.5883 17.4996ZM11.9999 1.2C12.3182 1.2 12.6234 1.32643 12.8484 1.55147C13.0735 1.77651 13.1999 2.08174 13.1999 2.4V3.6C13.1999 3.91826 13.0735 4.22348 12.8484 4.44853C12.6234 4.67357 12.3182 4.8 11.9999 4.8C11.6816 4.8 11.3764 4.67357 11.1514 4.44853C10.9263 4.22348 10.7999 3.91826 10.7999 3.6V2.4C10.7999 2.08174 10.9263 1.77651 11.1514 1.55147C11.3764 1.32643 11.6816 1.2 11.9999 1.2Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.9998 19.2C12.3181 19.2 12.6233 19.3264 12.8483 19.5515C13.0734 19.7765 13.1998 20.0817 13.1998 20.4V21.6C13.1998 21.9183 13.0734 22.2235 12.8483 22.4485C12.6233 22.6736 12.3181 22.8 11.9998 22.8C11.6815 22.8 11.3763 22.6736 11.1513 22.4485C10.9262 22.2235 10.7998 21.9183 10.7998 21.6V20.4C10.7998 20.0817 10.9262 19.7765 11.1513 19.5515C11.3763 19.3264 11.6815 19.2 11.9998 19.2Z"
                              fill="white"
                            />
                          </svg>
                        </svg>
                      </Flex>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      )}
    </Box>
  );
};

export default RightContent;
