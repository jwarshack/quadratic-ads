import React from 'react'
import { Flex, Button, Text, Grid, GridItem, Box } from '@chakra-ui/react'
import ad from '../7up.jpg'
import AdContainer from './AdContainer'

export default function Ads() {
    return (
        <Flex justify="space-between">
            <Flex dir="column">
                <Button>Submit Ad</Button>
            </Flex>
            <Box>
                <Text>Next Campaign starting in: </Text>
                <Grid templateColumns='repeat(2, 1fr)' gap={4} maxW="75%">
                    <GridItem>
                        <AdContainer/>
                    </GridItem>
                    <GridItem>
                        <AdContainer/>
                    </GridItem>
                    <GridItem>
                        <AdContainer/>
                    </GridItem>
                    <GridItem>
                        <AdContainer/>
                    </GridItem>
                </Grid>
            </Box>
        </Flex>
    )
}
