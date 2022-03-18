import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import React, { useContext, useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CancelIcon from '@mui/icons-material/Cancel'
import SearchIcon from '@mui/icons-material/Search'
import classes from '../utils/classes'
import { getError } from '../utils/error'
import Cookies from 'js-cookie'
import { useSnackbar } from 'notistack'
import axios from 'axios'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import Image from 'next/image'
import Carousel from '../components/Carousel'
import Accordion from '../components/Accordion'
import ContactForm from '../components/ContactForm'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  Switch,
  Badge,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  InputBase,
  Grid,
} from '@mui/material'

import { Store } from '../utils/Store'

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store)
  const { darkMode, cart, userInfo } = state

  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
      },
    },

    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  })

  const router = useRouter()

  const [sidbarVisible, setSidebarVisible] = useState(false)
  const sidebarOpenHandler = () => {
    setSidebarVisible(true)
  }
  const sidebarCloseHandler = () => {
    setSidebarVisible(false)
  }

  const [categories, setCategories] = useState([])
  const { enqueueSnackbar } = useSnackbar()

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`)
      setCategories(data)
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' })
    }
  }

  const [query, setQuery] = useState('')
  const queryChangeHandler = (e) => {
    setQuery(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    router.push(`/search?query=${query}`)
  }

  useEffect(() => {
    fetchCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' })
    const newDarkMode = !darkMode
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF')
  }
  const [anchorEl, setAnchorEl] = useState(null)
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null)
    if (redirect) {
      router.push(redirect)
    }
  }
  const logoutClickHandler = () => {
    setAnchorEl(null)
    dispatch({ type: 'USER_LOGOUT' })
    Cookies.remove('userInfo')
    Cookies.remove('cartItems')
    Cookies.remove('shippingAddress')
    Cookies.remove('paymentMethod')
    router.push('/')
  }

  const isDesktop = useMediaQuery('(min-width:600px)')
  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Dixon Print Shop` : 'Dixon Print Shop'}
        </title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='static' sx={classes.appbar}>
          <Toolbar sx={classes.toolbar}>
            <Box display='flex' alignItems='center'>
              <IconButton
                edge='start'
                aria-label='open drawer'
                onClick={sidebarOpenHandler}
                sx={classes.menuButton}
              >
                <MenuIcon sx={classes.navbarButton2} />
              </IconButton>
              <NextLink href='/' passHref>
                <Link sx={classes.searchSection}>
                  <Image
                    src={require('../public/images/dixonlogo4J.svg')}
                    width={100}
                    height={30}
                    alt='logo'
                  />
                </Link>
              </NextLink>

              {/* <NextLink href='/' passHref>
                <Link>
                  <Typography sx={classes.h4}>Main</Typography>
                </Link>
              </NextLink> */}
            </Box>
            <Drawer
              anchor='left'
              open={sidbarVisible}
              onClose={sidebarCloseHandler}
            >
              <List>
                <ListItem>
                  <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                  >
                    <Typography>Shopping by category</Typography>
                    <IconButton
                      aria-label='close'
                      onClick={sidebarCloseHandler}
                    >
                      <CancelIcon />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider light />
                {categories.map((category) => (
                  <NextLink
                    key={category}
                    href={`/search?category=${category}`}
                    passHref
                  >
                    <ListItem
                      button
                      component='a'
                      onClick={sidebarCloseHandler}
                    >
                      <ListItemText primary={category}></ListItemText>
                    </ListItem>
                  </NextLink>
                ))}
              </List>
              <NextLink href='/' passHref>
                <Link>
                  <Typography sx={classes.h4}>Main Page</Typography>
                </Link>
              </NextLink>
              <NextLink href='http://www.dixondeuxyeux.com' passHref>
                <Link>
                  <Typography sx={classes.h4}>Website Page</Typography>
                </Link>
              </NextLink>
            </Drawer>

            <Box sx={isDesktop ? classes.visible : classes.hidden}>
              <form onSubmit={submitHandler}>
                <Box sx={classes.searchForm}>
                  <InputBase
                    name='query'
                    sx={classes.searchInput}
                    placeholder='Search'
                    onChange={queryChangeHandler}
                  />
                  <IconButton
                    type='submit'
                    sx={classes.iconButton}
                    aria-label='search'
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
              </form>
            </Box>
            <Box>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href='/cart' passHref>
                <Link>
                  <Typography component='span'>
                    {cart.cartItems.length > 0 ? (
                      <Badge
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        // overlap='rectangle'
                        color='primary'
                        badgeContent={cart.cartItems.length}
                      >
                        <ShoppingCartIcon sx={classes.navbarButton3} />
                      </Badge>
                    ) : (
                      <ShoppingCartIcon
                        color='primary'
                        style={{
                          fontSize: '24px',

                          marginBottom: '-8px',
                        }}
                      />
                    )}
                  </Typography>
                </Link>
              </NextLink>
              {userInfo ? (
                <>
                  <Button
                    aria-controls='simple-menu'
                    aria-haspopup='true'
                    onClick={loginClickHandler}
                    sx={classes.navbarButton}
                  >
                    {userInfo.name}
                  </Button>
                  <Menu
                    id='simple-menu'
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                  >
                    <MenuItem
                      onClick={(e) => loginMenuCloseHandler(e, '/profile')}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={(e) =>
                        loginMenuCloseHandler(e, '/order-history')
                      }
                    >
                      Order Hisotry
                    </MenuItem>
                    {userInfo.isAdmin && (
                      <MenuItem
                        onClick={(e) =>
                          loginMenuCloseHandler(e, '/admin/dashboard')
                        }
                      >
                        Admin Dashboard
                      </MenuItem>
                    )}
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <NextLink href='/login' passHref>
                  <Link>
                    <Typography component='span'>Login</Typography>
                  </Link>
                </NextLink>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <Container>{children} </Container>
        {/* No go  */}

        <Carousel />

        <Typography sx={classes.lower2b}>
          <Grid container>
            <Grid item md={8} xs={12}>
              <Accordion />
            </Grid>
            <Grid item md={4} xs={12}>
              <ContactForm />
            </Grid>
          </Grid>
        </Typography>
        <footer>
          <br />
          <Typography sx={classes.lower3a}>
            All rights reserved. © 2022 Dixon / Deux Yeux Photographie
            <br />
            Martin Dixon - Founder / Principal Photographer
            {''} <br />
          </Typography>
        </footer>
      </ThemeProvider>
    </>
  )
}
