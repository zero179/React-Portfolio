import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Button } from '@chakra-ui/button';
import {Image} from "@chakra-ui/react";
import React from 'react'

const Header = () => {
    const {colorMode}=useColorMode();
    const isDark= colorMode ==="dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
        <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"/>
        <Flex direction={isNotSmallerScreen ? "row" : "column"}
            spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
            alignSelf="flex-start">
            <Box mt={isNotSmallerScreen ?"0" : 16} align="flex-start">
                <Text fontSize="5x1" fontWeight="semibold">Hi, I am Šimon</Text>
                <Text fontSize="7x1" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Hi, I am Šimon</Text>
                <Text color={isDark ? "gray.200": "gray.500"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                <Button mt={8} colorScheme="blue" onClick={() =>
                    window.open("https://Google.com")
                }>Contact Me</Button>       
            </Box>
            <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full"
                backgroundColor="transparent" boxShadow="lg"
                boxSize="300px" src="fotka.jpeg" alt="her-image"/>
         </Flex>
    </Stack>
  )
}

export default Header