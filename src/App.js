import React from 'react';
import { IconButton } from '@chakra-ui/react';
import {VStack,Flex,Heading,Spacer} from '@chakra-ui/layout';
import {useColorMode} from '@chakra-ui/color-mode';
import {FaSun,
        FaMoon,
        FaGithub,
        FaInstagram,
        FaLinkedin,
        FaFacebook} from 'react-icons/fa';
import Header from './Components/Header';
import Social from './Components/Social';
import Profile from './Components/Profile';
import Aboutme from './Components/Aboutme';
const App = () => {
  const {colorMode,toggleColorMode}=useColorMode();

  const isDark= colorMode === "dark";
  return (
   <VStack p="5">
     <Flex w="100%">
       <Heading ml="8" size="md" fontWeight="semibold" color="#0099f7">Archchaya Uthayakumar
       </Heading>
        <Spacer />
        <IconButton
          ml={2}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={()=>
          window.open("	https://www.linkedin.com/in/archchaya-uthayakumar/")}
        />

        <IconButton
          ml={2}
          icon={<FaFacebook />}
          isRound="true"
          onClick={()=>
          window.open("	https://www.linkedin.com/in/archchaya-uthayakumar/")}
        />

        <IconButton
          ml={2}
          icon={<FaGithub/>}
          isRound="true"
          onClick={()=>
          window.open("	https://www.github.com/Archchaya")}
        />

      <IconButton
        ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        />
     </Flex>
     <Header />
     <Social />
     <Profile />
     <Aboutme />
   </VStack>

  );
};

export default App
