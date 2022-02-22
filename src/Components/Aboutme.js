import React from 'react'
import { Icon } from "@chakra-ui/icon";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
const Aboutme = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");
    return (
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        width="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
      >
        <Box alignSelf="center" px="32" py="16">
          <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
            About me
          </Heading>
          <Text fontSize="2xl" color="gray.400">
            I am Archchaya Uthayakumar, I am looking for an internship
            opportunities. An enthusiastic and hard working Undergraduate
            aspiring to become a professional IT sector, Proficient with good
            business & IT knowledge and a faster learner. Looking for a
            challenging role to expose & enhance my analytical, testing ,
            designing, decision making and problem solving skills for the
            success of the organization.
          </Text>
        </Box>
      </Flex>
    );
}

export default Aboutme
