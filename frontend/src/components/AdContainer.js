import React from 'react'
import { Box, Image, Text} from "@chakra-ui/react"
import ad from '../7up.jpg'

export default function AdContainer() {
    return (
        <Box>
            <Image src={ad} h={500}></Image>            
        </Box>
    )
}
