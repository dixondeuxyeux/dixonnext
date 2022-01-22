import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import classes from '../utils/classes'

class ImageGalleryComponent extends React.Component {
  render() {
    return (
      <div>
        <h2></h2>
        <Carousel
          autoPlay
          interval='5000'
          transitionTime='1000'
          showIndicators={false}
          // infiniteLoop={true}
          showThumbs={false}
          // centerMode='true'
          showStatus={false}
        >
          <div>
            <Image
              src='/images/swimBanner2.jpg'
              layout='responsive'
              width={1500}
              height={822}
              alt='sunny'
            />
            <p sx={classes.lower2}>
              It&apos;s Always Sunny In Africa, Dakar 2018 from the &apos;Dakar
              Noir&apos; Book
            </p>
          </div>
          <div>
            <Image
              src='/images/monkWalk.jpg'
              layout='responsive'
              width={1500}
              height={822}
              alt='sunny'
            />
            <p sx={classes.lower2}>
              Funeral for PM Meles Zenawi, Addis Ababa 2013 from the
              &apos;Kingdom of Original Man&apos; book
            </p>
          </div>
          <div>
            <Image
              src='/images/malala.jpg'
              layout='responsive'
              width={1500}
              height={822}
              alt='sunny'
            />
            <p sx={classes.lower2}>
              Malala Vogue Cover, Gothenburg, Sweden 2021 from the &apos;Small
              World&apos; book
            </p>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default ImageGalleryComponent
