import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  btn: {
    width: '100px',
    height: '30px',
    fontSize: '12px',
    background: 'none',
    border: '1px solid whitesmoke',
    color: 'whitesmoke',
    marginLeft: '10px',
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover': {
      background: 'whitesmoke',
      color: '#222222',
      cursor: 'pointer',
    },
  },
});

export default function BtnReset({ onClick }) {
  const classes = useStyle();

  return (
    <div>
      <button className={classes.btn} onClick={onClick}>
        Reset
      </button>
    </div>
  );
}
