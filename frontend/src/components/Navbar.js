import React from 'react'
import { Flex, Heading, Text, Link } from '@chakra-ui/react'
import {AiFillTwitterCircle, AiFillGithub}from "react-icons/ai"

export default function Navbar() {
    return (
        <Flex as="nav" paddingBottom={10} direction="column">
            <Heading>Quadratic Ads</Heading>
            <Flex align="center">
                <Text mr={3}>By @jwarshack</Text> 
                <Link fontSize="3xl" as="a" href="https://twitter.com/jwarshack" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle/></Link>
                <Link fontSize="3xl" as="a" href="https://github.com/jwarshack/quadratic-ads" target="_blank" rel="noopener noreferrer"><AiFillGithub/></Link>

            </Flex>
        </Flex>
    )
}
