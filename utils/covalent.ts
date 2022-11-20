import axios from 'axios'
const API_KEY = process.env.NEXT_PUBLIC_COVALENT_KEY
const chainId = 80001; //matic-mumbai

export const getNFTTokenIdsForContract = async (contractAddress: string) => {
  const response = await axios.get(`https://api.covalenthq.com/v1/${chainId}/tokens/${contractAddress}/nft_token_ids/?&key=${API_KEY}`, {
    headers: {
      'content-type': 'application/json',
    }
  })
  console.log(response.data.data.items)
  return response.data
}

export const getNFTTransactionsForContract = async (contractAddress: string, tokenId: string) => {
  const response = await axios.get(`https://api.covalenthq.com/v1/${chainId}/tokens/${contractAddress}/nft_transactions/${tokenId}/?&key=${API_KEY}`, {
    headers: {
      'content-type': 'application/json',
    }
  })
  console.log(response.data.data.items)
  return response.data
}

export const getNFTExternalMetadataForContract = async (contractAddress: string, tokenId: string) => {
  const response = await axios.get(`https://api.covalenthq.com/v1/${chainId}/tokens/${contractAddress}/nft_metadata/${tokenId}/?&key=${API_KEY}`, {
    headers: {
      'content-type': 'application/json',
    }
  })
  console.log('metadata', response.data.data.items)
  return response.data
}

export const getNFTMarketGlobalView = async (chain: string) => {
  const response = await axios.get(`https://api.covalenthq.com/v1/${chain}/nft_market/?&key=${API_KEY}`, {
    headers: {
      'content-type': 'application/json',
    }
  })
  console.log(response)
}

export const getHistoricalDataForNFTCollection = async (chain: string, collectionAddress: string) => {
  const response = await axios.get(`https://api.covalenthq.com/v1/${chain}/nft_market/collection/${collectionAddress}/?&key=${API_KEY}`, {
    headers: {
      'content-type': 'application/json',
    }
  })
  console.log(response)
}
