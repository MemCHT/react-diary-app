import React, {FC, useState} from 'react';
import {  } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import CalendarComponent from 'components/molecules/Calendar';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
}));

const data = {
  month: 1,
  days: [
    [-1, -1, -1, 1, 2, 3, 4],
    [5, 6 ,7 ,8 ,9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31],
  ],
  maxDay: 31
}

const Calendar: FC = () => {

  return (
    <CalendarComponent
      month={data.month}
      days={data.days}
      maxDay={data.maxDay}
    />
  );
}

export default Calendar;