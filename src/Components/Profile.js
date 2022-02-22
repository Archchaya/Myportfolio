import React from "react";
import { Icon } from "@chakra-ui/icon";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import {
  DiReact,
  DiMongodb,
  DiNodejsSmall,
  DiMysql,
    DiJava,
  DiJavascript,
} from "react-icons/di";

const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");
  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      width="100%"
      maxWidth={{ base: "100vh", md: "120vh", lg: "120vh", xl: "120vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          6 month
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Fresher
        </Text>

        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="8"
            direction="column"
            mt={4}
            bg="blue.400"
            h="20vh"
            w="20vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="white" p="4" w="24" h="24" as={DiReact} />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              React
            </Text>
          </Flex>

          <Flex
            rounded="8"
            direction="column"
            mt={4}
            bg="gray.100"
            h="20vh"
            w="20vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="Black" p="4" w="24" h="24" as={DiNodejsSmall} />
            <Text color="Black" p="4" fontSize="xl" fontWeight="semibold">
              Nodejs
            </Text>
          </Flex>

          <Flex
            rounded="8"
            direction="column"
            mt={4}
            bg="blue.100"
            h="20vh"
            w="20vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="Black" p="4" w="24" h="24" as={DiMysql} />
            <Text color="Black" p="4" fontSize="xl" fontWeight="semibold">
              MySQL
            </Text>
          </Flex>

          <Flex
            rounded="8"
            direction="column"
            mt={4}
            bg="blue.400"
            h="20vh"
            w="20vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="Black" p="4" w="24" h="24" as={DiMongodb} />
            <Text color="Black" p="4" fontSize="xl" fontWeight="semibold">
              Mongobd
            </Text>
                  </Flex>
                
          <Flex
            rounded="8"
            direction="column"
            mt={4}
            bg="gray.100"
            h="20vh"
            w="20vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="Black" p="4" w="24" h="24" as={DiJava} />
            <Text color="Black" p="4" fontSize="xl" fontWeight="semibold">
              JAVA
            </Text>
          </Flex>
        </Flex>
          </Box>
   
      </Flex>

      
      
      
  );
};

export default Profile;
