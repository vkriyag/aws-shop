import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { slideData } from './slideData'; 


function HomeSlider() {
    const items = slideData.map((item)=> <img src = {item.imgPath} />)
  return (
    <div>
        <AliceCarousel  items={items} />
    </div>
  )
}

export default HomeSlider
