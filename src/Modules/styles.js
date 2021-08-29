import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  Main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '50px',

    // display: '-webkit-box',
    // display: '-moz-box',
    // display: '-ms-flexbox',
    // display: '-moz-flex',
    // display: '-webkit-flex',
    // display: 'flex',
  },
  Metric: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%', 
  },
  Bar: {
    margin: '25px',
  },
  MetricInformation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
    
  },
  Label: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',

    color: '#5D6D97',
  },
  Submit: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginLeft: '10px',
      marginBottom: '14px',
      fontFamily: 'Ubuntu',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '16px',
  
      color: '#5D6D97',
  }
}));

export default useStyles;
