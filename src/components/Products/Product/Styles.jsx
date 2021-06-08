import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    minHeight: '100%',
    alignItems: "baseline",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    // justifyContent: 'flex-end',
  },
  cardContent: {
    '& h2': {
      fontSize:"1.4rem",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    // display: 'flex',
    // justifyContent: 'space-between',
  },
  cardButton: {
    color:"#0c7c80"
  }
}));