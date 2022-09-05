/* eslint-disable react/jsx-no-target-blank */
const Footer = () => {
  return (
    <section className="main-section" id="contact">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-12 order-xs-2">
            <div className="title">
              <h1>JOIN OUR COMMUNITY</h1>
            </div>
            <div className="main-box">
              <div className="social-btn">
                <ul>
                  <li>
                    <a href="https://www.instagram.com/kickscammersnft/" target="_blank">
                      <img src="images/instagram.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/HQdtsyPc" target="_blank">
                      <img src="images/discord.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/nft_kick" target="_blank">
                      <img src="images/twitter.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-box">
              <p>More updates about the raffles are coming soon!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;