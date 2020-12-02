import React, {FC, useState} from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  },
}));

export const Loading: FC = () => {

  const styles = useStyles();

  return (
  <div className={styles.root}>
    <CircularProgress size={60}/>
  </div>);
}

export default Loading;