import React from 'react'
import { VStack, Button, Image, Text } from '@chakra-ui/react'
import ad from '../7up.jpg'
import { AiOutlineHeart } from 'react-icons/ai'


export default function Post() {
    return (
        <VStack textAlign="center" outline="1px">
            <Image src={ad} h={500}></Image>
            <Button><AiOutlineHeart/><Text ml={2}>10</Text></Button>
            
        </VStack>
    )
}
