import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  footerContainer: {
    width: '100%',
    height: 85,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f6f5fa',
    marginTop: 'auto',
  },
  followUsContainer: {
    alignItems: 'center',
    display: 'flex',
    marginLeft: theme.spacing(6),
  },
  followUsBtnContainer: {
    display: 'flex',
    width: 95,
    justifyContent: 'space-evenly',
  },
  aditonalInfoContainer: {
    marginRight: theme.spacing(6),
  },
  socialMediaBtn: {
    color: 'white',
    fontSize: 25,
    minWidth: 30,
    padding: theme.spacing(1),
  },
  fbBtnColor: {
    backgroundColor: '#3b5998',
    '&:hover': {
      backgroundColor: '#2D4373',
    },
  },
  instaBtnColor: {
    backgroundColor: '#833ab4',
    '&:hover': {
      backgroundColor: '#672E8D',
    },
  },
}));
