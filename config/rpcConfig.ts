// For Ethereum, use the Infura endpoints
export default function rpcConfig() {
  return process.env.NODE_ENV === 'production'
    ? 'https://wallaby.node.glif.io/rpc/v0'
    : `https://wallaby.node.glif.io/rpc/v0`;
}
