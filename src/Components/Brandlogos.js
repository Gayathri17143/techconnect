import React from 'react'
import Carousel from 'react-grid-carousel'
import Image1 from '../assets/Apple.png'
import Image2 from '../assets/oneplus.png'
import Image3 from '../assets/mi.png'
import Image4 from '../assets/vivo.png'
import Image5 from '../assets/oppo.png'
import Image6 from '../assets/Samsung.png'
import Image7 from '../assets/Tecno.png'
import Image8 from '../assets/realme.png'
import Image9 from '../assets/nokia.png'

const Gallery = () => {
  return (
    <Carousel cols={3} rows={2} gap={2} loop>
      <Carousel.Item>
        <img width="100%" src= {Image1} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={Image2} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={Image3} alt="text"  />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={Image4} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={Image5} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={Image6} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={Image7} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={Image8} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src= {Image9} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={Image1} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={Image1} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={Image1} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={Image1} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={Image1} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={Image1} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={Image1} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={Image1} alt="text" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={Image1} alt="text" />
      </Carousel.Item>
     
      {/* ... */}
    </Carousel>
  )
}
export default Gallery;

