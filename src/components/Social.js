import React from 'react'
import { HStack } from "@chakra-ui/layout"
import Icon from "@chakra-ui/icon"
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from "react-icons/fa"

const Social = () => {
  return (
    <HStack spacing="24">
            <Icon as={FaFacebookF} boxSize="50" />
            <Icon as={FaGoogle} boxSize="50" />
            <Icon as={FaSpotify} boxSize="50" />
            <Icon as={FaShopify} boxSize="50" />
    </HStack>
  )
}

export default Social