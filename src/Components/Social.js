import React from 'react'
import {Icon} from '@chakra-ui/icon';
import {HStack} from '@chakra-ui/layout';
import { FaFacebookF, FaInstagram, FaMedium } from 'react-icons/fa';



const Social = () => {
    return (
        <HStack spacing={24}>

            <Icon as={FaFacebookF} boxSize={50} />
            <Icon as={FaInstagram} boxSize={50} />
            <Icon as={FaMedium} boxSize={50} />
            </HStack>
    )
}

export default Social
