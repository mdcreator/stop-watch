import React from 'react';
import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import BtnStart from '../BtnStart';
import BtnStop from '../BtnStop';
import BtnReset from '../BtnReset';
import BtnWait from '../BtnWait';

const useStyle = createUseStyles({
  timerTitle: {
    fontSize: '19px',
    fontWeight: '400',
    textTransform: 'uppercase',
    padding: '25px 0 10px 0',
    fontStretch: '50%',
    letterSpacing: '11.5px',

    '@media screen and (min-width: 768px)': {
      fontSize: '30px',
    },
  },

  titleDescr: {
    fontSize: '12px',
    fontStretch: '50%',
    letterSpacing: '1.5px',
    marginBottom: '70px',

    '@media screen and (min-width: 768px)': {
      fontSize: '20px',
    },
  },

  timer: {
    position: 'relative',
    display: 'block',
    backgroundImage:
      'linear-gradient(to right,rgba(47, 48, 58, 0.2),rgba(47, 48, 58, 0.2))',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    /* justify-content: center; */
    /* align-items: center; */

    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
    fontSize: '22px',

    padding: '20px 50px',
    margin: '30px 10px',
    borderRadius: '10px',
    '@media screen and (min-width: 768px)': {
      fontWeight: '800',
      fontSize: '50px',
      padding: '40px 50px',
    },
  },

  field: {
    display: 'inline-block',
    marginBottom: '70px',

    '@media screen and (max-width: 768px)': {
      width: 'calc((100% - 20px) / 2)',
    },
  },

  value: {
    display: 'inline-block',
  },

  label: {
    fontSize: '12px',

    '@media screen and (min-width: 768px)': {
      fontSize: '16px',
    },
  },

  info: {
    fontSize: '8px',
    fontStretch: '50%',
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    fontStretch: '50%',

    '@media screen and (min-width: 768px)': {
      fontSize: '15px',
      /* font-stretch: 50%;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      font-stretch: 50%; */
    },
  },

  info: {
    '& nth- child(2n)': {
      marginBottom: '25px',
    },
  },

  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [status, setStatus] = useState('start' | 'stop' | 'reset' | 'wait');

  const classes = useStyle();

  useEffect(() => {
    const unsubscribe$ = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscribe$))
      .subscribe(() => {
        if (status === 'run') {
          setSeconds(val => val + 1000);
        }
      });

    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    };
  }, [status]);

  const start = React.useCallback(() => {
    setStatus('run');
  }, []);

  const stop = React.useCallback(() => {
    setStatus('stop');
    setSeconds(0);
  }, []);

  const reset = React.useCallback(() => {
    setSeconds(0);
  }, []);

  const wait = React.useCallback(() => {
    setStatus('wait');
  }, []);

  return (
    <div className={classes.timer} id="timer-1">
      <h1 className={classes.timerTitle}>Birthday party</h1>
      <p className={classes.titleDescr}>🥳 Let's get this party started 🥳</p>
      <span> {new Date(seconds).toISOString().slice(11, 19)}</span>

      <div className={classes.buttons}>
        <BtnStart onClick={start} />

        <BtnStop onClick={stop} />

        <BtnReset onClick={reset} />

        <BtnWait onClick={wait} />
      </div>
    </div>
  );
}
