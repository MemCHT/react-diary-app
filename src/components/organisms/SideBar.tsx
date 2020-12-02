import React, {FC, useState} from 'react';
import { Card,  } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import CalendarComponent from 'containers/molecules/Calendar';

import { calendar_data } from 'config/testdata';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center'
  },
  content: {
    width: '80%'
  }
}));

export const SideBar: FC = () => {

  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <CalendarComponent/>
      </div>
    </div>
  );
}

export default SideBar;