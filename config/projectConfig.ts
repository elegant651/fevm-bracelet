const projectConfig = {
  nftName: 'BraceletNFT',

  nftSymbol: 'APLLO',

  maxSupply: 100,

  maxMintAmountPerTxn: 10,

  mintCost: process.env.NODE_ENV === 'production' ? 100 : 0.01,

  networkName:
    process.env.NODE_ENV === 'production'
      ? 'Filecoin Mainnet' // 'Ethereum Mainnet'
      : 'Filecoin Wallaby Testnet', // 'Rinkeby Testnet'

  chainName: 'tFIL', // 'ETH'

  chainId: process.env.NODE_ENV === 'production' ? 31415 : 31415, // Ethereum (1), Rinkeby (4)

  siteDomain: 'www.yourdomain.com',

  siteUrl:
    process.env.NODE_ENV === 'production'
      ? `https://your_site_domain`
      : 'http://localhost:3000',

  openseaCollectionUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://opensea.io/collection/your_opensea_collection_name'
      : 'https://testnets.opensea.io/collection/your_opensea_collection_name',

  contractAddress:
    process.env.NODE_ENV === 'production'
      ? '0xace0f315102f256103E71B12C4e560fA80840615'
      : '0xace0f315102f256103E71B12C4e560fA80840615',

  scanUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://wallaby.filfox.info/en/address/'
      : 'https://wallaby.filfox.info/en/address/0x1a8F5A118A0C3D6dAFAef8825cEDba083576Bb55',
  // 'https://etherscan.io/address/your_ethereum_contract_address'
  // 'https://rinkeby.etherscan.io/address/your_rinkeby_contract_address'
};

export default projectConfig;
