import React, {FC, useState} from 'react';
import { Paper, Card, CardContent } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
  cardContent: {
    padding: 0,
  },
  paper: {
    height: '100%',
    width: '100%',
    paddingBottom: 'calc(100% - 1.5em)',
  }
}));

type Props = {
  day: number;
  maxDay: number;
}

const CalendarDay: FC<Props> = ({day, maxDay}) => {

  const styles = useStyles();

  if(1 <= day && day <= maxDay){
    return (
      <Card>
        <CardContent className={styles.cardContent}>
          <Paper className={styles.paper}>
            {day}
          </Paper>
        </CardContent>
      </Card>
    );
  }

  return (
    <></>
  );
}

export default CalendarDay;