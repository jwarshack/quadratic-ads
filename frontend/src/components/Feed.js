import React from 'react'
import { VStack, Flex, Text, Spinner} from "@chakra-ui/react"
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import Ad from './Ad'
import { contractAddress, contractABI } from '../config'

export default function Feed() {

    const [ads, setAds] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAds()
    }, [])

    async function getAds() { 
        const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`)
        const contract = new ethers.Contract(contractAddress, contractABI, provider)

        let totalAds = await contract.adCount()
        totalAds = totalAds.toNumber()

        let currentAds = []
        for(var i = 0; i < totalAds; i ++) {
            let ad = await contract.getAd(i)
            ad = {
                id: ad.id.toString(),
                creator: ad.creator,
                uri: ad.uri,
                likes: ad.likes.toString()
            }
            currentAds.push(ad)
            currentAds.sort((a,b) => b.likes - a.likes )
        }
        setAds(currentAds)
        setIsLoading(false)


    }

    if (isLoading) return <Flex justify="center"><Spinner/></Flex>
    if (!ads.length) return <Text textAlign="center" fontSize="3xl">There are no posts to display</Text>
    return (
        <VStack spacing={10}>
            {
                ads.map((ad, key) => {
                    return <Ad ad={ad} key={key}/>
                })
            }
        </VStack>
        )
}
