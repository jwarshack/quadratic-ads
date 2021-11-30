import { VStack, Button } from '@chakra-ui/react'
import React from 'react'

export default function Upload() {
    return (
        <VStack>
            <input type="file"/>
            <Button>Upload</Button>


        </VStack>
    )
}
