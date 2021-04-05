import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  headerContainer: {
    width: '100%',
    height: 85,
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  icon: {
    fontSize: 45,
  },
  logoContainer: {
    marginLeft: theme.spacing(6),
  },
  buttonsContainer: {
    marginRight: theme.spacing(6),
  },
  shopButton: {
    background: 'black',
    color: 'white',
  },
}));
