import { useEffect, useState } from 'react';
import projectConfig from '../config/projectConfig';
import { MINTINGS, MINTINㄹGS } from '../contracts/testMinting';
import { getNFTTokenIdsForContract, getNFTExternalMetadataForContract } from '../utils/covalent'

export default function TokenList() {

  const [list, setList] = useState([]);
  
  useEffect(() => {
    const fetch = async () => {
      // const contractAddr = projectConfig.contractAddress
      // const tokenIds = await getNFTTokenIdsForContract(contractAddr)
      // console.log(tokenIds)
      // setList(tokenIds.data.items);

      setList(MINTINGS)

      // const tokenLength = tokenIds.data.items.length;
      // for (let i=0; i<tokenLength; i++) {
      //   const metadata = await getNFTExternalMetadataForContract(contractAddr, i.toString());
      //   console.log('m', metadata)
      // }
    }

    fetch()
  }, []);

  return (
    <>
      <h2 className="text-4xl mb-4">NFT List</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-4">
          {list.length > 0 && list.map((item: any, index: number) => {
            return (
              <div key={item.token_id}>
                <img src={MINTINGS[index].image} width={250} />
                <p>{MINTINGS[index].description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
