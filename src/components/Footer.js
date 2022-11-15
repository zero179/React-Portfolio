import { Text, VStack, Container, Stack } from '@chakra-ui/layout'
import { ButtonGroup, IconButton, } from '@chakra-ui/react'
import React from 'react'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <React.Fragment>
        <VStack  w={"100%"} bg={"black"} >
        <Container
    as="footer"
    role="contentinfo"
    py={{
      base: '12',
      md: '16',
    }}
  >
    <Stack
      spacing={{
        base: '4',
        md: '8',
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
        
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
        </VStack>
    </React.Fragment>
  )
}

export default Footer