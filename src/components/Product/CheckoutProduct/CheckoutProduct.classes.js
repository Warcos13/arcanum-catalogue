import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  rowContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  productContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 0',
    margin: '20px',
  },
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '65px',
  },
  priceContainer: {
    color: '#707070',
    fontSize: '20px',
    marginRight: '25%',
  },
  imageContainer: {
    marginLeft: '20%',
    width: '200px',
  },
  deleteBtnContainer: {
    width: '175px',
    textAlign: 'center',
  },
  productName: {
    color: '#404040',
    fontSize: '20px',
    margin: 0,
  },
  productType: {
    color: '#989898',
    fontSize: '15px',
  },
  btn: {
    background: '#8a2be2',
    borderRadius: '50%',
    color: 'white',
    padding: '5px',
    margin: '2px',
  },
  btnsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  quantity: {
    fontSize: '20px',
  },
  innerContainer: {
    display: 'flex',
    width: '35%',
    alignItems: 'center',
    justifyIontent: 'space-between',
  },
  deleteIcon: {
    fontSize: '45px',
  },
  deleteBtn: {
    background: '#fbfbfb',
    color: 'black',
  },
  deleteBtn: {
    '&:hover': {
      color: 'red',
    },
  },
}));
