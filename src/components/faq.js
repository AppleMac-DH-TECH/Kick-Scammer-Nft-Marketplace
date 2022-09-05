import { AnimationOnScroll } from 'react-animation-on-scroll';

import { Accordion } from "react-bootstrap";

const Faq = () => {

    return (
        <section className="section-padding" id='faq'>
            <div className="container py-5">
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                    <div className="title mb-5">
                        <h1>FAQ</h1>
                    </div>
                </AnimationOnScroll>
                <Accordion defaultActiveKey="0">
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><i className="fab fa-quora"></i>How to Mint a Scammer?</Accordion.Header>
                            <Accordion.Body>
                                Here are the steps on what you need to do to get your Kick Scammers NFT.
                                <ol>
                                    <li>Download the metamask.io extension on your browser.</li>
                                    <li> Purchase Ethereum from various exchanges, such as Coinbase or Binance.</li>
                                    <li>Send Ethereum from the exchange to your MetaMask wallet.</li>
                                    <li>Open KickScammersNFT.com and click on the connect Wallet button, Metamask will pop up and asking for connection.</li>
                                    <li>Please check that you are on the Ethereum chain and click the connect Wallet button again.</li>
                                    <li>When everything is connected, select the number of NFTs you wish to mint and click “MINT NOW” button.</li>
                                    <li>Confirm the transaction and any associated fees (gas fees).</li>
                                    <li>Once you have made your purchase, your NFTs will appear in your wallet and on OpenSea.</li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><i className="fab fa-quora"></i>What is the Total Supply?</Accordion.Header>
                            <Accordion.Body>
                                The total supply is 1000 generated Kick Scammers NFT.
                            </Accordion.Body>
                        </Accordion.Item>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><i className="fab fa-quora"></i>	Which are the rarest NFTs & do they also have benefits?</Accordion.Header>
                            <Accordion.Body>
                                Every month there will be a raffle, the rarer your NFT the more entries you get.
                                But be cautious once your entry is used, it is gone.
                            </Accordion.Body>
                        </Accordion.Item>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><i className="fab fa-quora"></i>What could you possibly win in a raffle?</Accordion.Header>
                            <Accordion.Body>
                                Have a close look at all Kick Scammers NFTs hands and you will see what will be winnable at the first few raffles.
                            </Accordion.Body>
                        </Accordion.Item>
                    </AnimationOnScroll>


                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><i className="fab fa-quora"></i>Where can I view my NFTs after minting?</Accordion.Header>
                            <Accordion.Body>
                                Your Kick Scammers NFT will appear in Metamask wallet. You can also see your freshly minted NFT art directly on your Opensea.io account.
                            </Accordion.Body>
                        </Accordion.Item>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header><i className="fab fa-quora"></i>What are the minting costs for a Kick Scammers NFT?</Accordion.Header>
                            <Accordion.Body>
                                The minting cost will be 0.1 eth for one Scammer (excluded gas fee).
                            </Accordion.Body>
                        </Accordion.Item>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header><i className="fab fa-quora"></i>Are Kick Scammers NFT a good investment?</Accordion.Header>
                            <Accordion.Body>
                                For sure they are, this is only the beginning for the Scam Database.
                            </Accordion.Body>
                        </Accordion.Item>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header><i className="fab fa-quora"></i>What is a Scam Database?</Accordion.Header>
                            <Accordion.Body>
                                Please have a look at <a href="https://scamlistcrypto.com" target="_blank">Scamlistcrypto.com</a> for more information.
                            </Accordion.Body>
                        </Accordion.Item>
                    </AnimationOnScroll>
                </Accordion>
            </div>
        </section>
    );
}

export default Faq