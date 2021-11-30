import React from 'react'
import { VStack, Image, Button, Text} from "@chakra-ui/react"
import ad from '../7up.jpg'
import Post from './Post'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

import { contractAddress, contractABI } from '../config'

export default function Showcase() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    async function getPosts() { 
        const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`)
        const contract = new ethers.Contract(contractAddress, contractABI, provider)

        let totalPosts = await contract.postCount()
        totalPosts = totalPosts.toNumber()

        let currentPosts = []
        for(var i = 0; i < totalPosts; i ++) {
            let post = await contract.getPost(i)
            post = {
                id: post.id.toString(),
                creator: post.creator,
                uri: post.uri,
                likes: post.likes.toString()
            }
            currentPosts.push(post)
        }
        setPosts(currentPosts)


    }

    if (!posts.length) return <Text textAlign="center" fontSize="3xl">There are no posts to display</Text>
    return (
        <VStack spacing={10}>
            {
                posts.map((post, key) => {
                    return <Post post={post}/>
                })
            }
        </VStack>
        )
}
