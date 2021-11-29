import React from 'react'
import { VStack, Image, Text, Button, Box} from '@chakra-ui/react'
import ad from '../7up.jpg'


export default function AdContainer() {
    return (
        <VStack spacing={5}>
            <Box pos="relative">
                <Image src={ad} h={500}/>
                <Box pos="absolute" z={20} right="1rem" bottom="1rem">
                    <Button bg="gray.800" _hover={{bg: "gray.400"}}>Extend Lifetime</Button>   
                </Box>    
            </Box>
        </VStack>
        )
}
