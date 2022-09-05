import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './hooks/useCountdown';
import './timerStyle.css';

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
         <div><span>You can mint on June 30th, 2022</span></div>
      <a className="countdown-link">
        <DateTimeDisplay value={days} type={'Days'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
};

export default CountdownTimer;
