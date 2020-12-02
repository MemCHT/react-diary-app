import React, {FC, useState} from 'react';
import { Card, CardHeader, CardContent, GridList, GridListTile, Paper, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import CalendarDay from 'components/atoms/CalendarDay';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
  calendarDay: {
    paddingBottom: '0.25em'
  },
  week: {
    textAlign: 'center'
  },
  month: {
    textAlign: 'center'
  }
}));

type Props = {
  month: number;
  cellHeight?: number;
  days: Array<Array<number>>;
  max_day: number;
  today: number;
}

const Calendar: FC<Props> = ({month, cellHeight=20, days, max_day, today}) => {

  const styles = useStyles();

  return (
    <Card>

      <CardHeader
        title={month+1 + "月"}
        className={styles.month}
      />

      <CardContent>
        <Card variant='outlined'>

          <CardContent>
            <GridList cellHeight="auto" cols={7}>
              {['日','月','火','水','木','金','土'].map((day)=>(
                <GridListTile><Paper className={styles.week}>{day}</Paper></GridListTile>
              ))}
              {days.map((week)=>(
                week.map((day)=>(
                  <GridListTile>

                    <CalendarDay
                      day={day}
                      max_day={max_day}
                      today = {today}
                    />

                  </GridListTile>
                ))
              ))}
            </GridList>
          </CardContent>

        </Card>
      </CardContent>

    </Card>
  );
}

export default Calendar;