import React, { Fragment } from 'react'
import Image from 'next/image'

export default function Carousel() {
  return (
    <Fragment>
      <h2>{''}</h2>
      <div>
        <Image
          src='/images/swimBanner2.jpg'
          layout='responsive'
          width={1500}
          height={822}
          alt='sunny'
        />
      </div>
    </Fragment>
  )
}
