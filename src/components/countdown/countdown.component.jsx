import React from 'react';
import { useCountdown } from '../../utils/countdown/usecountdown';

import ExpiredNotice from './expired.component'
import ShowCounter from './showcounter.component'

import './countdown.styles.scss';

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer
