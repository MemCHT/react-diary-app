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
  max_day: 31
};

const getCalendarData = () => {
  const now = new Date();
  const today = now.getDate();
  const year = now.getFullYear();
  const month = now.getMonth();
  const days = getDays(now, year, month);
  const max_day = new Date(year, month+1, 0, 0, 0, 0, 0).getDate();

  return {month: month, days: days, max_day: max_day, today: today};
}

const getDays = (now: Date, year: number, month: number): Array<Array<number>> => {

  // 最初の日付
  let date = 1;
  const days: Array<Array<number>> = new Array<Array<number>>(6);

  for(let i = 0; i < days.length; i++){
    const week: Array<number> = new Array<number>(7);

    for(let j = 0; j < week.length; j++){
      const current_date = new Date(year, month, date);
      
      if(current_date.getDay() == j)
        week[j] = date++;
      else
        week[j] = -1;
      // alert(`date: ${date},day: ${current_date.getDay()}`);
    }

    days[i] = week;
  }
  
  return days;
}

const Calendar: FC = () => {
  // alert(JSON.stringify(getCalendarData()));

  return (
    <CalendarComponent {...getCalendarData()}/>
  );
}

export default Calendar;