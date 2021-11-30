import React from 'react'
import { Flex, Heading, Text, Link, Button } from '@chakra-ui/react'
import {AiFillTwitterCircle, AiFillGithub}from "react-icons/ai"
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
    return (
        <Flex paddingBottom={10} direction="column" w="100%">
            <Heading>Quadratic Ads</Heading>
            <Flex align="center">
                <Text mr={3}>By @jwarshack</Text> 
                <Link fontSize="3xl" as="a" href="https://twitter.com/jwarshack" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle/></Link>
                <Link fontSize="3xl" as="a" href="https://github.com/jwarshack/quadratic-ads" target="_blank" rel="noopener noreferrer"><AiFillGithub/></Link>
            </Flex>
            <Flex justify="center">
                <RouterLink to="/"><Button bg="none" w={100}>Feed</Button></RouterLink>
                <RouterLink to="/upload"><Button bg="none" w={100}>Upload</Button></RouterLink>
            </Flex>
        </Flex>


    )
}
