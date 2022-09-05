/* eslint-disable no-unused-vars */
import { getContractInstance } from './index';
import { utils } from "ethers";

async function owner() {
  try {
    const contractInstance = getContractInstance()
    const res = await contractInstance.methods.owner().call()
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}
async function burnmint(address, value) {
  let price = value.toString();
  let cost = utils.parseEther(price)
  try {
    const contractInstance = getContractInstance()
    const res = await contractInstance.methods.burnNFTs().send({
      from: address,
      value: cost
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function mint(amount, address, value) {
  let price = value.toString();
  let cost = utils.parseEther(price)
  try {
    const contractInstance = getContractInstance()
    const res = await contractInstance.methods.mintNFTs(amount).send({
      from: address,
      value: cost
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

export {
  mint,
  burnmint,
  owner
}