import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
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
    fontSize: 20,
    top: 50,
    marginLeft: 20,
    padding: '0 10',
  },

  h5: {
    paddingLeft: '62px',
    marginBottom: -6,
    fontWeight: 500,
    color: '#2197e6',
    fontSize: '1.1rem',
    opacity: 0.73,
  },

  grow: {
    flexGrow: 1,
  },
  drop: {
    boxShadow: '0 10px 20px #36342e66, 0 6px 6px #33362e66',
  },

  main: {
    minHeight: '80vh',
  },

  footer: {
    padding: '1rem',
    // background: '#27415a',
    marginTop: '3rem',
    // marginBottom: '1rem',
    textAlign: 'center',
  },

  center: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '80px',

    backgroundColor: '#eaf2f4',
  },

  lower: {
    marginTop: -30,
    paddingRight: 10,
  },

  lower2: {
    paddingTop: 1,
    marginBottom: -6,
    // paddingRight: 10,
    // marginLeft: 10,
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

  lower4: {
    paddingLeft: '62px',
    marginBottom: -6,
    fontWeight: 500,
    fontSize: '1rem',
    opacity: 0.63,
  },

  lower5: {
    display: 'flex',
    alignContent: 'center',
    backgroundColor: '#e7f1f8',
    // borderBottom: '.5px solid #12738E',
    padding: '3px 3px 4px 2px',
    marginLeft: '62px',
    marginBottom: -1,
    fontWeight: 500,
    color: '#133b55',
    fontSize: '1.1rem',
    opacity: 0.83,
  },

  justify: {
    marginLeft: '50px',
    marginRight: '50px',
    padding: '20px 0px 30px 10px',
    alignItems: 'center',
    fontSize: '1.2rem',
    color: '#777',
    border: 'none',
  },

  section: {
    marginTop: 10,
    marginBottom: 10,
  },

  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
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
    marginLeft: 10,
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
  fullWidth: {
    width: '100%',
  },
  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: { padding: 0 },
  mt1: { marginTop: '1.3rem' },

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

  // search
  searchSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  searchInput: {
    paddingLeft: 8,
    color: '#000000',
    '& :: placeholder': {
      color: '#606060',
    },
  },
  iconButton: {
    backgroundColor: '#f8c040',
    padding: 5,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
  sort: {
    marginRight: 5,
  },
  fullContainer: { height: '100vh' },
  mapInputBox: {
    position: 'absolute',
    display: 'flex',
    left: 0,
    right: 0,
    margin: '10px auto',
    width: 300,
    height: 40,
    '& input': {
      width: 250,
    },
  },
}))

export default useStyles
