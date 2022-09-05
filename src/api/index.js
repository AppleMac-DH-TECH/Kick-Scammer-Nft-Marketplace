import Web3 from 'web3';
import siteConfig from '../config/site.config';
import ABI from '../config/abi.json'

const getContractInstance = () => {
  const web3 = new Web3(Web3.givenProvider);
  let res = new web3.eth.Contract(ABI, siteConfig.CONTRACT_ADDRESS);
  return res
}

export {
  getContractInstance,
};