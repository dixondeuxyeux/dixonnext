import NextLink from 'next/link'
import { Grid, Link, Typography } from '@mui/material'
import Layout from '../components/Layout'
import db from '../utils/db'
import Product from '../models/Product'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import Image from 'next/image'
import { Store } from '../utils/Store'
import ProductItem from '../components/ProductItem'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import classes from '../utils/classes'

export default function Home(props) {
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const { topRatedProducts, featuredProducts } = props
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    const { data } = await axios.get(`/api/products/${product._id}`)
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock')
      return
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
    router.push('/cart')
  }
  return (
    <Layout>
      <Carousel showIndicators={false} showStatus={false}>
        {featuredProducts.map((product) => (
          <NextLink
            key={product._id}
            href={`/product/${product.slug}`}
            passHref
          >
            <Link sx={classes.flex}>
              <Image
                src={product.featuredImage}
                alt={product.name}
                width={1500}
                height={400}
              />
            </Link>
          </NextLink>
        ))}
      </Carousel>

      <Typography sx={classes.h7}>Latest Photographs </Typography>
      <Grid container spacing={3}>
        {topRatedProducts.map((product) => (
          <Grid item md={4} key={product.name}>
            <ProductItem
              product={product}
              addToCartHandler={addToCartHandler}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export async function getServerSideProps() {
  await db.connect()
  const featuredProductsDocs = await Product.find(
    { isFeatured: true },
    '-reviews'
  )
    .lean()
    .limit(9)
  const topRatedProductsDocs = await Product.find({}, '-reviews')
    .lean()
    .sort({
      rating: -1,
    })
    .limit(9)
  await db.disconnect()
  return {
    props: {
      featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
    },
  }
}
