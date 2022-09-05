/* eslint-disable react/jsx-no-target-blank */
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Slider from "react-slick";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Container } from "react-bootstrap";
const imageSlider = {
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
const NFTShow = () => {
    return (
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <Container fluid className="image-slider">
          <Slider {...imageSlider}>

            <div>
              <LazyLoadImage src="/images/4.webp" alt="" />
            </div>

            <div>
              <LazyLoadImage src="/images/48.webp" alt="" />
            </div>

            <div>
              <LazyLoadImage src="/images/168.webp" alt="" />
            </div>

            <div>
              <LazyLoadImage src="/images/299.webp" alt="" />
            </div>

            <div>
              <LazyLoadImage src="/images/307.webp" alt="" />
            </div>

            <div>
              <LazyLoadImage src="/images/342.webp" alt="" />
            </div>

            <div>
              <LazyLoadImage src="/images/366.webp" alt="" />
            </div>

            <div>
              <LazyLoadImage src="/images/866.webp" alt="" />
            </div>

            <div>
              <LazyLoadImage src="/images/915.webp" alt="" />
            </div>
          </Slider>
        </Container>

      </AnimationOnScroll>
    )
  }
  
  export default NFTShow;