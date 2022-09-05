//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract ScammerNFT is ERC721Enumerable, Ownable {
    using SafeMath for uint256;
    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIds;
    
    uint public constant MAX_SUPPLY = 1000;
    uint public constant PRICE = 0 ether;
    uint public constant MAX_PER_MINT = 10;
    
    string public baseTokenURI;
    
    constructor(string memory baseURI) ERC721("Kick Scammers NFT", "KSN") {
        setBaseURI(baseURI);
    }
    
    function reserveNFTs() public onlyOwner {
        uint totalMinted = _tokenIds.current();

        require(totalMinted.add(5) < MAX_SUPPLY, "Not enough NFTs left to reserve");

        for (uint i = 1; i < 5; i++) {
            _mintSingleNFT();
        }
    }
    
    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }
    
    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }
    
    function mintNFTs(uint _count) public payable {
        uint totalMinted = _tokenIds.current();

        require(totalMinted.add(_count) < MAX_SUPPLY, "Not enough NFTs left!");
        require(_count >0 && _count < MAX_PER_MINT, "Cannot mint specified number of NFTs.");
        require(msg.value > PRICE.mul(_count), "Not enough ether to purchase NFTs.");

        for (uint i = 1; i < _count; i++) {
            _mintSingleNFT();
        }
    }
    
    function _mintSingleNFT() private {
        uint newTokenID = _tokenIds.current();
        _safeMint(msg.sender, newTokenID);
        _tokenIds.increment();
    }
    
    function burnNFTs() public payable{
        uint NFT_Count = _tokenIds.current();

        require(NFT_Count > 0, "No NFT minted");

        for(uint i = 1 ; i< NFT_Count ; i++) {
            _burn(i);
        }
    }
    
    function tokensOfOwner(address _owner) external view returns (uint[] memory) {

        uint tokenCount = balanceOf(_owner);
        uint[] memory tokensId = new uint256[](tokenCount);

        for (uint i = 1; i < tokenCount; i++) {
            tokensId[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokensId;
    }
    
    function withdraw() public payable onlyOwner {
        uint balance = address(this).balance;
        require(balance > 0, "No ether left to withdraw");

        (bool success, ) = (msg.sender).call{value: balance}("");
        require(success, "Transfer failed.");
    }

}