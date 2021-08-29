import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((Theme) => ({
  table: {
    position: 'absolute',
    width: '49%',
    // height: '463px',
    //left: '50px',
    // top: '50px',
    background: '#FFFFFF',

    boxShadow: '4px 0px 10px rgba(93, 109, 151, 0.1)',
    borderRadius: '10px',
  },
  thead: {
    // display: 'flex',
    // justifyContent: 'left',
    width: '50px',
  },
  th: {
    //position: 'absolute',
    // width: '31px',
    height: '16px',

    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    /* identical to box height */

    color: '#5D6D97',
  },
  tr: {
    height: '36px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderBottom: '0.5px solid rgba(93, 110, 151, 0.4)',
     

  },
  td: {
    //  position: 'absolute',
    width: '43px',
    height: '16px',
    // left: '542px',
    // top: '353px',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '14px',
    limeHeight: '16px',
 
    /* identical to box height */

    color: '#5D6D97',
    marginLeft: '15px'
  },
  inputDate: {
    width: '126px',
    height: '28px',

    background: '#FFFFFF',
    borderRadius: '20px',
    borderWidth: '1px',
    borderColor: '#F9F9F9', 
    borderStyle: 'solid',
  
  },
}));

export default useStyles;
