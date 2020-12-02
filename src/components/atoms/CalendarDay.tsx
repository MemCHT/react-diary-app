import React, {FC, useState} from 'react';
import { Paper, Card, CardContent } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: '0.0625em'
  },
  cardContent: {
    padding: 0,
    paddingBottom: '0px !important'
  },
  paper: {
    height: '100%',
    width: '100%',
    paddingBottom: 'calc(100% - 1.5em)',
    textAlign: 'center',
  },
  today: {
    color: theme.palette.primary.light,
  }
}));

type Props = {
  day: number;
  max_day: number;
  today: number;
}

const CalendarDay: FC<Props> = ({day, max_day, today}) => {

  const styles = useStyles();

  if(1 <= day && day <= max_day){
    return (
      <Card className={styles.root}>
        <CardContent className={styles.cardContent}>
          <Paper className={styles.paper}>
            <span className={day == today ? styles.today : ''}>
              {day}
            </span>
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