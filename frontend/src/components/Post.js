import React from 'react'
import { VStack, Button, Image, Text } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai'
import { ethers } from 'ethers'
import { useState } from 'react'

import { contractAddress, contractABI } from '../config'



export default function Post({ post }) {

    const [errorMsg, setErrorMsg] = useState()


    async function likePost(id) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()

            const contract = new ethers.Contract(contractAddress, contractABI, signer)

            let userLikes = await contract.getUserLikes(id)
            userLikes = userLikes.toNumber()

            const likeFee = await contract.likeFee()

            let price

            if (userLikes == 0) {
                price = likeFee
            } else {
                price = likeFee * (userLikes+1)
            }

            console.log(userLikes+1)


            const tx = await contract.likePost(id, { value: price })
            await tx.wait()


        } catch(err) {
            console.log(err)
            setErrorMsg(err.message)

        }
    }
    return (
        <VStack textAlign="center" outline="1px">
            <Image src={post.uri} h={500}></Image>
            <Button onClick={() => likePost(post.id)}><AiOutlineHeart/><Text ml={2}>{post.likes}</Text></Button>
            {
                errorMsg && (
                    <Text>{errorMsg}</Text>
                )
            }
        </VStack>
    )
}
