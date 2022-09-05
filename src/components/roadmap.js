import { AnimationOnScroll } from 'react-animation-on-scroll';
const Roadmap = () => {

    return (
        <section className="section-padding" id='roadmap'>
            <div className="container pb-5">
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                    <div className="title">
                        <h1>Roadmap</h1>
                    </div>
                </AnimationOnScroll>

                <div className="roadmap">
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <div className="roadmap-meta">
                            <div className="roadmap-center">
                                <div className="phases">
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="roadmap-data">
                                <div className="roadmap-box">

                                    <h2>Kick Scammers NFT Release</h2>
                                    <p>The official release of Kick Scammers NFT. 1000 NFTs will be available to mint for 0.1 ETH.</p>

                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <div className="roadmap-meta">
                            <div className="roadmap-center">
                                <div className="phases">
                                    <p>2</p>
                                </div>
                            </div>
                            <div className="roadmap-data">
                                <div className="roadmap-box">

                                    <h2>Monthly Raffle</h2>
                                    <p>Only the Kick Scammers NFT Holder can participate in the Raffle. The rarer your NFT is the more entries you can use for your raffle. Winnable prizes: Look at your NFTs hands or arms. This will be one of the first prizes.</p>

                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <div className="roadmap-meta">
                            <div className="roadmap-center">
                                <div className="phases">
                                    <p>3</p>
                                </div>
                            </div>
                            <div className="roadmap-data">
                                <div className="roadmap-box">

                                    <h2>Scammers Roulette</h2>
                                    <p>You want to be scammed? No problem, you can win a lot or loose all your entries with the Scammers Roulette.</p>

                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>


                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <div className="roadmap-meta">
                            <div className="roadmap-center">
                                <div className="phases">
                                    <p>4</p>
                                </div>
                            </div>
                            <div className="roadmap-data">
                                <div className="roadmap-box">

                                    <h2>Kick Scammers NFT staking</h2>
                                    <p>Staking will begin, earn through every contribution that will be made to the Scam database. More about the Scam database on
                                        <a href="https://scamlistcrypto.com" target="_blank" style={{ color: "white", textDecoration: "none" }}>&nbsp; scamlistcrypto.com</a></p>

                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </section>

    );

}

export default Roadmap