import React, {FC, useState} from 'react';
import { Card, CardHeader, CardContent, GridList, GridListTile, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import CalendarDay from 'components/atoms/CalendarDay';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
}));

type Props = {
  month: number;
  cellHeight?: number;
  days: Array<Array<number>>;
  maxDay: number;
}

const Calendar: FC<Props> = ({month, cellHeight=20, days, maxDay}) => {

  return (
    <Card>

      <CardHeader
        title="カレンダー"
      />

      <CardContent>
        <Card>

          <CardHeader
            title={month + "月"}
          />

          <CardContent>
            <GridList cellHeight="auto" cols={7}>
              {days.map((week)=>(
                week.map((day)=>(
                  <GridListTile>

                    <CalendarDay
                      day={day}
                      maxDay={maxDay}
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