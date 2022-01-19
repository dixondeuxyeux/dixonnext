import React from 'react'
import Image from 'next/image'
import classes from '../utils/classes'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

class ImageGalleryComponent extends React.Component {
  render() {
    return (
      <div>
        <h2></h2>
        <Carousel
          autoPlay
          interval='3000'
          transitionTime='1500'
          showIndicators={false}
          infiniteLoop={true}
          showThumbs='false'
          // centerMode='true'
          showStatus={false}
        >
          <div>
            <Image
              src='/images/swimBanner2.jpg'
              // layout='responsive'
              width={1500}
              height={822}
              alt='sunny'
            />
            <p sx={classes.lower2}>
              It's Always Sunny In Africa, Dakar 2018 from the "Dakar Noir' Book
            </p>
          </div>
          <div>
            <Image
              src='/images/monkWalk.jpg'
              // layout='responsive'
              width={1500}
              height={822}
              alt='sunny'
            />
            <p sx={classes.lower2}>
              Funeral for PM Meles Zenawi, Addis Ababa 2013 from the "Kingdom of
              Original Man' book"
            </p>
          </div>
          <div>
            <Image
              src='/images/malala.jpg'
              // layout='responsive'
              width={1500}
              height={822}
              alt='sunny'
            />
            <p sx={classes.lower2}>
              Malala Vogue Cover, Gothenburg, Sweden 2021 from the "Small World'
              book"
            </p>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default ImageGalleryComponent
