const classes = {
  // common
  flex: {
    display: 'flex',
  },
  hidden: {
    display: 'none',
  },
  visible: {
    display: 'initial',
  },
  sort: {
    marginRight: 1,
  },
  fullHeight: { height: '100vh' },
  fullWidth: {
    width: '100%',
  },
  error: {
    color: '#f04040',
  },

  //layout
  main: {
    marginTop: 2,
    minHeight: '80vh',
  },
  footer: {
    padding: '1rem',
    // background: '#27415a',
    marginTop: '3rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  section: {
    marginTop: 1,
    marginBottom: 1,
  },

  // header
  appbar: {
    backgroundColor: '#27415a',
    '& a': {
      color: '#ffffff',
      marginLeft: 1,
    },
  },

  toolbar: {
    justifyContent: 'space-between',
  },
  surface: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  navbarButton: {
    color: '#ffffff',
    fontSize: 32,
    textTransform: 'initial',
  },

  navbarButton2: {
    color: '#ffffff',
    fontSize: 32,
    marginBottom: 1,
    textTransform: 'initial',
  },

  menuButton: {
    padding: 0,
  },

  // Search
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 1,
  },

  searchInput: {
    paddingLeft: 1,
    color: '#000000',
    '& :: placeholder': {
      color: '#606060',
    },
  },

  raise: {
    marginTop: '-10',
    marginBottom: '-10',
    color: '#2197e6',
  },

  searchSection: {
    paddingRight: -12,
  },

  iconButton: {
    backgroundColor: '#f8c040',
    padding: 1,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },

  mapInputBox: {
    position: 'absolute',
    display: 'flex',
    left: 0,
    right: 0,
    margin: '10px auto',
    width: 250,
    height: 40,
    '& input': {
      width: 250,
    },
  },

  navbar: {
    backgroundColor: '#27415a',
    '& a': {
      color: '#fff',
      marginLeft: 10,
      marginRight: 10,
    },
  },

  h3: {
    fontSize: 20,
    top: 50,
  },

  h4: {
    fontSize: 17,
    marginLeft: 2,
    padding: '0 10',
    paddingBottom: '10px',
    marginBottom: '10px',
    color: '#7a9aaf',
  },

  h5: {
    paddingLeft: '62px',
    marginBottom: -6,
    fontWeight: 500,
    color: '#2197e6',
    fontSize: '1.1rem',
    opacity: 0.73,
  },
  h7: {
    fontSize: '1.6rem',
    fontWeight: 400,
    marginBottom: '1rem',
    marginTop: '-2.5rem',
  },
  lower: {
    marginTop: -30,
    paddingRight: 7,
  },

  lower2: {
    marginTop: 5,
    marginBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },

  lower2a: {
    textAlign: 'center',
    paddingTop: 1,
    marginBottom: 6,
    paddingRight: 12,
    marginLeft: 12,
  },
  lower2b: {
    maxWidth: '1500px',
    alignItems: 'left',
    paddingTop: -1,
    marginBottom: 6,
    paddingRight: 5,
    paddingLeft: 5,
    // marginLeft: 5,
  },

  width: {
    alignItems: 'center',
    maxWidth: '1300px',
    paddingLeft: '10px',
  },

  lower3: {
    textAlign: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    marginBottom: -6,
    fontWeight: 500,
    fontSize: '1rem',
    opacity: 0.63,
  },

  lower3a: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: -6,
    fontWeight: 500,
    fontSize: '1rem',
    opacity: 0.63,
  },

  lower4: {
    paddingLeft: '64px',
    marginBottom: -6,
    fontWeight: 500,
    fontSize: '1rem',
    opacity: 0.63,
  },

  lower5: {
    display: 'flex',
    alignContent: 'center',
    // backgroundColor: '#ddbebb',
    // borderBottom: '.5px solid #12738E',
    padding: '18px 6px 14px 6px',
    // marginBottom: '30px',
    marginTop: '10px',
    fontWeight: 500,
    color: '#4587b1',
    fontSize: '1.25rem',
    opacity: 0.83,
  },

  background: {
    backgroundColor: '#d2dde4',
  },

  login: {
    fontSize: '1.2rem',
    // paddingRight: '.5rem',
  },

  justify: {
    marginLeft: '7px',
    marginRight: '7px',
    marginBottom: '20px',
    padding: '0px 0px 10px 0px',
    alignItems: 'center',
    fontSize: '1.2rem',
    color: '#777',
    border: 'none',
  },
  justify2: {
    maxWidth: '1800px',
    marginLeft: '2px',
    marginRight: '2px',
    marginBottom: '100px',
    fontSize: '1.2rem',
    color: '#777',
    border: 'none',
  },

  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  field: {
    padding: 8,
  },

  navbarButton: {
    color: '#ffffff',
    fontSize: 18,
    // marginBottom: 1,
    textTransform: 'initial',
  },
  navbarButton2: {
    color: '#ffffff',
    fontSize: 32,
    marginBottom: 1,
    marginLeft: 1,
    textTransform: 'initial',
  },
  navbarButton3: {
    color: '#ffffff',
    fontSize: 27,
    // marginTop: 1,
    marginLeft: 1,
    // marginRight: 1,
    textTransform: 'initial',
  },
  featuredImage: {
    maxWidth: '100%',
  },

  transparentBackground: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  // fullWidth: {
  //   width: '100%',
  // },
  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },

  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: { padding: 0 },
  mt1: { marginTop: '1.3rem' },

  // search

  // Accordion

  accordion: {
    minheight: 150,
    height: '100%',
  },

  icon: {
    verticalalign: 'bottom',
    height: 20,
    width: 20,
  },

  details: {
    alignitems: 'center',
    border: '1px solid rgba(0,0,0,0.1)',
    borderradius: 4,
  },

  button2: {
    display: 'block',
    maxWidth: '700',
    fontSize: '1.3rem',
    // color: '#1db6d8',
    paddingTop: 5,
    padding: '20 30',
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
  container: {
    margin: '0 auto',
    // backgroundColor: '#789dc0',
  },

  sort: {
    marginRight: 8,
  },
  fullContainer: { height: '100vh' },

  // accordion

  root: {
    marginBottom: '20px',
  },
}

export default classes
