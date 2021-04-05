import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: 175,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 'auto',
    paddingLeft: `${theme.spacing(2.5)} !important`,
  },
  buyIcon: {
    fontSize: theme.spacing(4),
    color: theme.palette.primary.main,
  },
  iconBtn: {
    padding: theme.spacing(1),
  },
}));
