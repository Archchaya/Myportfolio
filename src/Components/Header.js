import { Box, Circle, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { useMediaQuery } from "@chakra-ui/media-query";

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      {isNotSmallScreen && (
        <Circle
          position="absolute"
          bg="blue.100"
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="flex-end"
        />
      )}

      <Flex
        direction={isNotSmallScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallScreen ? "32" : 0}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallScreen ? 0 : 16} alignself="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, #0099f7, #f11712, #1565c0)"
            bgClip="text"
          >
            Archchaya Uthayakumar
          </Text>
          <Text color={isDark?"gray.200":"gray.500"}>Undergraduate Student at SUSL, Developer</Text>
          <Button mt={8} colorScheme="blue">Hire Me</Button>
        </Box>
        <Image
          mt={isNotSmallScreen?"0":"12"}
          mb={isNotSmallScreen?"0":"12"}
          alignSelf="center"
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxsize="300px"
          src="https://miro.medium.com/fit/c/262/262/1*tImeKm6S-5hn6HYPJQT86A.jpeg"
        />
      </Flex>
    </Stack>
  );
};

export default Header;
