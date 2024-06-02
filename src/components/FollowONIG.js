import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "../styles/FollowONIG.css";
import { store } from '../productsStore/Store';
import "react-alice-carousel/lib/alice-carousel.css";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import i6 from "../assets/i6.jpg";
import i7 from "../assets/i7.jpg";
import i8 from "../assets/i8.jpg";
import i9 from "../assets/i9.jpg";
import i10 from "../assets/i10.jpg";
import i11 from "../assets/i11.jpg";
import { ExternalLink } from 'react-external-link';
import Marquee from "react-fast-marquee";


const FollowONIG = () => {

  const responsive = {
    2000: {
      items: 11,
    },
    1600: {
      items: 6
    },
    1200: {
      items: 5,
    },
    800: {
      items: 3,
    },
    0: {
      items: 1,
    },
  };

  return (
    <div className=' flex flex-row gap-28  mt-44 flex-wrap mb-36'>
      <p className='igText '> FOLLOW US ON TWITTER </p>

      <div className='followOnInstaMarqueeConatiner'>

        <Marquee pauseOnHover={true} speed={100} >

          <ExternalLink href='https://www.instagram.com/reel/Ck6akcopA_F/' >
            <img src="https://img.freepik.com/free-photo/pink-cosmetic-containers-arrangement_23-2149270055.jpg?t=st=1716528935~exp=1716532535~hmac=efea731a53a2565c56624af16c1ce0cbeeb1cf68a272e157871f285b9d657a8a&w=360" className=' w-60 rounded-2xl   mrMl carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/Ck9DOsWLEdw/'>
            <img src="https://img.freepik.com/free-photo/3d-rendering-personal-care-products-fondant-pink_23-2151053832.jpg?t=st=1716528968~exp=1716532568~hmac=30bf9bcfba48db0d7edba0037ca9ff2d988a3a02abe5535e2e243f71c37961c2&w=360" className=' w-60 rounded-2xl  mrMl  carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/Ck_u9AjOJFh/'>
            <img src="https://img.freepik.com/free-photo/front-view-cream-colored-bottle-plastic-shampoo-can-with-black-cap-isolated-along-with-flowers-yellow-iced-blue-background-cosmetics-beauty-hair_140725-18097.jpg?t=st=1716528989~exp=1716532589~hmac=a433f6a79f67f12dd699a9db700444fd3833f7d16121e56e2f318349389aa45f&w=360" className=' w-60 rounded-2xl   mrMl carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/CkgnyuWu_u7/'>
            <img src="https://img.freepik.com/free-photo/high-angle-cosmetics-containers-assortment_23-2149270024.jpg?t=st=1716529010~exp=1716532610~hmac=a89cb543da9459a7b5005cbb22ed349b780c8bdd84a13b6f9628e24c4d5914f2&w=360" className=' w-60 rounded-2xl   mrMl carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/p/CkeOeuMvliW/'>
            <img src="https://img.freepik.com/free-photo/3d-cosmetic-product-with-color-year-tones_23-2151510113.jpg?t=st=1716529034~exp=1716532634~hmac=fd04cf5a2dbcc5e28ae904a200682f0fae7f85150e3558004ee1bea0a84b8e13&w=360" className=' w-60 rounded-2xl  mrMl  carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/CkgnyuWu_u7/'>
            <img src="https://img.freepik.com/free-photo/pink-cosmetic-containers-flowers_23-2149270051.jpg?t=st=1716529054~exp=1716532654~hmac=8fda7ae39441f2f57a417b834d8cffc5394d24ad4cffc79b299cd3a383a934d1&w=360" className=' w-60 rounded-2xl  mrMl  carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/Ckg4wazO9SQ/'>
            <img src="https://img.freepik.com/free-photo/dreamy-aesthetic-cosmetic-product-with-fresh-background_23-2151382793.jpg?t=st=1716529088~exp=1716532688~hmac=5222ac209320b4c8b926197325e19cce7ed687459c31ab635ab34745af4edb19&w=360" className=' w-60 rounded-2xl   mrMl carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/CkjTteAMPaZ/'>
            <img src="https://img.freepik.com/free-photo/pink-cosmetic-products-flowers_23-2149270046.jpg?t=st=1716529114~exp=1716532714~hmac=428fdddc7b44ab20e0f8cdcf67de8576bdbc7e3d8b7229055d4980b7f2b9ab57&w=360" className=' w-60 rounded-2xl   mrMl carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/CklzQFcJW9a/'>
            <img src="https://img.freepik.com/free-photo/minimal-arrangement-beauty-products_23-2148961320.jpg?t=st=1716529131~exp=1716532731~hmac=736d020cc97eef1f3985ffac116d1a1bb13f52f31fe79d26536638ff07532247&w=360" className=' w-60 rounded-2xl  mrMl carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/CkwQD6KO1WP/'>
            <img src="https://img.freepik.com/free-photo/still-life-natural-self-care-assortment_23-2148989951.jpg?t=st=1716529146~exp=1716532746~hmac=0d5ba308237770c1ba3a073af0646962e354ad29b143dda15261ad6c788d180e&w=360" className=' w-60 rounded-2xl  mrMl  carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/Ckg4wazO9SQ/'>
            <img src="https://img.freepik.com/free-photo/front-view-natural-cream-concept_23-2148578693.jpg?t=st=1716529169~exp=1716532769~hmac=621f0e0e9de46a688747cbd90b70021cce0d12f5591c43729fdc4e971034a520&w=360" className=' w-60 rounded-2xl  mrMl  carouselIMg' />
          </ExternalLink>

        </Marquee>
      </div>

    </div>



  )
}

export default FollowONIG
