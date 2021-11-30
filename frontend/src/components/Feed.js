import React from 'react'
import { VStack, Image, Button, Text} from "@chakra-ui/react"
import ad from '../7up.jpg'
import Post from './Post'

export default function Showcase() {
    return (
        <VStack spacing={10}>
            <Post/>
            <Post/>
        </VStack>
        )
}
