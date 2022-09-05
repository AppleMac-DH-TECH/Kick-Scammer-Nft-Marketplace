/* eslint-disable jsx-a11y/alt-text */
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const About = () => {

    return (
        <section className="section-padding" id='about'>
            <div className="container py-5">
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                    <div className="title">
                        <h1>About US</h1>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                    <div className="main-box">
                        <p>We are crypto enthusiasts since 2017 from Austria. We always loved the whole crypto community but one
                            thing we always hated: Scammer. It becomes hard to differentiate between Real and Fake. So, we want
                            to begin this whole movement to expose Scammer and add them to the Database. People are forgetting
                            fast who and what is reliable, they need a few times to learn the hard way what is really a Scam.
                            We want to change that, a few clicks on the Scam Database and you can check if your currency, NFT
                            or even celebrity is a Scammer or not.
                        </p>
                    </div>
                </AnimationOnScroll>
                <div className="row gx-lg-5">
                    <div className="col-lg-3 col-md-6">
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                            <div className="team">
                                <LazyLoadImage src="/images/73.webp" />
                                <h4>Scammer Dave</h4>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                            <div className="team">
                                <LazyLoadImage src="/images/84.webp" />
                                <h4>Scammer Nik</h4>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
                            <div className="team">
                                <LazyLoadImage src="/images/268.webp" />
                                <h4>Scammer Bern</h4>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
                            <div className="team">
                                <LazyLoadImage src="/images/688.webp" />
                                <h4>Scammer Lex</h4>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About
