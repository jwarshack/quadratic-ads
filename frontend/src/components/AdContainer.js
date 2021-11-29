import React from 'react'
import { VStack, Image, Button, Text} from "@chakra-ui/react"
import ad from '../7up.jpg'

export default function AdContainer() {
    return (
        <VStack spacing={5}>
            <Image src={ad} h={500}></Image>
            <Text>Current Lifetime:</Text>
            <Button>Extend Lifetime</Button>       
        </VStack>
    )
}
