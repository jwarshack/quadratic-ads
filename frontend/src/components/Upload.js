import { VStack, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'

import { contractAddress, contractABI } from '../config'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

export default function Upload() {
    const [fileToUpload, setFileToUpload] = useState()
    const [errorMsg, setErrorMsg] = useState()

    async function onChange(e) {
        const file = e.target.files[0]
        try {
            const added = await client.add(
                file,
                {
                    progress: (prog) => console.log(`received: ${prog}`)
                }
            )
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setFileToUpload(url)
        } catch (err) {
            console.log('Error uploading file: ', err)
            setErrorMsg(err.message)
        }
    }

    async function uploadFile() {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()

            const contract = new ethers.Contract(contractAddress, contractABI, signer)

            const tx = await contract.createAd(fileToUpload)
            await tx.wait()

        } catch (err) {
            console.log(err)
            setErrorMsg(err.message)
        }


    }
    return (
        <VStack>
            <input 
                type="file"
                onChange={onChange}
            />
            {
                fileToUpload && (
                    <Image src={fileToUpload} h={500}/>
                )
            }
            <Button onClick={uploadFile}>Upload</Button>
            {errorMsg && (
                <Text>{errorMsg}</Text>
            )}
        </VStack>
    )
}
