import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Minting from '../components/Minting';
import TokenList from '../components/TokenList';
import projectConfig from '../config/projectConfig';
import topImage from '../public/assets/main.jpg';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{projectConfig.nftName}</title>
      </Head>

      <Image src={topImage} alt={projectConfig.nftName} />

      <div className="bg-gray-800 py-8">
        <Prose>
          <h1 className="text-5xl font-bold mb-2">{projectConfig.nftName}</h1>
          <p className="text-xl">
            It aims to mint NFT for customers who have purchased handmade works and provide them with an opportunity to participate in their own community (DAO) later or to purchase new products at a low price. This MVP is with the inspiration of a friend writer who makes bracelets.
            It operates on the filecoin wallaby testnet.
          </p>
        </Prose>
      </div>

      <div className="py-8">
        <Prose>
          <Minting />
          <TokenList />
        </Prose>
      </div>
    </Layout>
  );
};

export default Home;
