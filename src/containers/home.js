import React, { useState,useEffect, useContext } from "react";
import { NotificationManager } from "react-notifications";
import Header from '../components/header';
import siteConfig from "../config/site.config";
import { mint,burnmint, owner } from "../api/nft"
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ScaleLoader";
import { Modal } from 'react-responsive-modal';
import { AppContext } from "../context/AppContext";
import CountdownTimer from '../components/Timer/CountdownTimer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Roadmap = React.lazy(() => import('../components/roadmap'));
const About = React.lazy(() => import('../components/about'));
const Faq = React.lazy(() => import('../components/faq'));

const Footer = React.lazy(() => import('../components/footer'));
const NFTShow = React.lazy(() => import('../components/nftshow'));

let End_Date = new Date('2022-06-30T00:00:00').getTime();
const Current_Date = new Date().getTime();
const totalRemaining = End_Date - Current_Date;

const dateTimeAfterThreeDays = End_Date;
const Home = () => {
  const {
    account,
    connectWallet,
    disconnectWallet,
    getAccBalance
  } = useContext(AppContext);

  useEffect(() => {
    // Update the document title using the browser API
    setTimeout(burnMint, totalRemaining);
  });

  const [amount, setAmount] = useState(1);
  let [loading, setLoading] = useState(false);
  let [color] = useState("#ffffff");
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  const handleIncrease = () => {
    setAmount(Math.min(10, amount + 1))
  }
  const handleDecrease = () => {
    setAmount(Math.max(1, amount - 1))
  }
  const handleConnect = () => {
    connectWallet()
      .then((res) => {
      })
      .catch((error) => {
        NotificationManager.warning('Warning', error.message, 3000);
        setLoading(false);
      })
  }
  const handleMint = async () => {
    setLoading(true);
    let balance = await getAccBalance();
    owner()
      .then((owner) => {
        let value = 0
        // if (owner !== account)
        value = amount * siteConfig.DISPLAY_COST;
        if (value > balance) {
          NotificationManager.warning('Warning', "Not enough balance", 3000);
          setLoading(false);
          return;
        }
        mint(amount, account, value)
          .then((res) => {
            NotificationManager.success('Success', "Success minted", 3000);
            onOpenModal();
            setLoading(false);
          })
          .catch((error) => {
            NotificationManager.warning('Warning', error?.message, 3000);
            setLoading(false);
          })
      })
  }
  const burnMint = async () => {
    setLoading(true);
    let balance = await getAccBalance();
    owner()
      .then((owner) => {
        let value = 0
        // if (owner !== account)
        value = amount * siteConfig.DISPLAY_COST;
        if (value > balance) {
          NotificationManager.warning('Warning', "Not enough balance", 3000);
          setLoading(false);
          return;
        }
        burnmint(account, value)
          .then((res) => {
            NotificationManager.success('Success', "Success minted", 3000);
            onOpenModal();
            setLoading(false);
          })
          .catch((error) => {
            NotificationManager.warning('Warning', error?.message, 3000);
            setLoading(false);
          })
      })
  }
  

  return (
    <>
      <Header address={account} connect={handleConnect}  disconnectWallet={disconnectWallet}/>
      <Modal open={open} onClose={onCloseModal} center styles={{ background: '#4e4e4e' }}>
        <div className="flex-center">
          <div className="main-counter">
            <div className="title">
              <h2>Purchase done</h2>
            </div>
            <p>Have a look on it at&nbsp;
              <a
                href="https://opensea.io/collection/kick-scammers-nft"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                OpenSea
              </a>
            </p>
          </div>
        </div>
      </Modal>
      <section className="main-section" id="mint">
        <div className="container">
          <div className="row align-items-center gy-5 mt-3">
            <div className="col-lg-12">
              <div className="title" >
                <h1>Expose the Scammers!</h1>
              </div>
              <div className="row align-items-center py-5">
                <div className="col-lg-5">
                  <div className="text-center main-gif">
                    <LazyLoadImage src="/images/animation.gif" alt="" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="main-box-lg">
                    <p>Every NFT will earn Scamtokens with every new contribution that will be added to the database.<br />
                      What about raffles? Every month there will be a raffle, the more rare your NFT the more entries you get.<br />
                      But be cautious once your entry is used it is gone.</p>
                    <p>More information about the database and Scamtokens on <span><a href="https://scamlistcrypto.com">scamlistcrypto.com</a></span></p>
                  </div>
                </div>
              </div>
              
              {totalRemaining > 0  ? (<CountdownTimer targetDate={dateTimeAfterThreeDays} />)
              : account ? 
              (
                <div className="flex-center">
                  <div className="main-counter">
                    <div className="title">
                      <h2>Mint</h2>
                    </div>
                    <p>Price of one Kick Scammer NFT: 0.1 ETH.</p>
                    <div className="counter">
                      <button onClick={() => handleDecrease()}>-</button>
                      <span>{amount}</span>
                      <button onClick={() => handleIncrease()}>+</button>
                    </div>
                    <ul className="navbar-nav mr-auto">
                      <li style={{ display: 'flex', justifyContent: 'center' }}>
                        {
                          !loading && <a className="custom-btn" id="connect-wallet" onClick={handleMint}>
                            Mint
                          </a>
                        }
                      </li>
                      
                      {/* <li style={{ display: 'flex', justifyContent: 'center' }}>
                        {
                          !loading && <a className="custom-btn" id="connect-wallet" onClick={burnMint}>
                            burn
                          </a>
                        }
                      </li> */}
                      <ClipLoader color={color} loading={loading} css={override} size={20} />
                      <li>
                        <p className="total">Total: {(siteConfig.DISPLAY_COST * amount).toFixed(1)} ETH</p>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="main-button" id="navbarText">
                  <ul className="navbar-nav mr-auto">
                    <a className="custom-btn" id="connect-wallet" onClick={handleConnect}>
                      Connect Wallet
                    </a>
                  </ul>
                </div>
              )
              }
            </div>
          </div>
        </div>
        <React.Suspense fallback={<></>}>
          <NFTShow />
        </React.Suspense>
        
        <React.Suspense fallback={<></>}>
          <Roadmap />
        </React.Suspense>
        <React.Suspense fallback={<></>}><About /></React.Suspense>
        <React.Suspense fallback={<></>}><Faq /></React.Suspense>
      </section>
      <React.Suspense fallback={<></>}><Footer /></React.Suspense>
    </>
  )
}

export default Home;