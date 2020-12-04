import React, {FC, useState} from 'react';
import { Card, CardHeader, CardContent, Typography, Divider } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import {Diary as DiaryModel} from 'config/Models';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
  header: {
    display: "flex",
    alignItems: "flex-end"
  },
  headerTitle: {
    flex: "3 0 auto",
  },
  headerDate: {
    flex: "1 0 auto",
    textAlign: "center"
  },
  btnGroup: {
    display: "flex",
  },
  btnGroupSide: {
    flex: "1.5 0 auto",
  },
  btnGroupCenter: {
    flex: "1 0 auto",
    textAlign: "center",
    marginBottom: "1em"
  }
}));

export type Props = {
  date: string;
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  diary: DiaryModel;
  handleOnChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const DiaryEdit: FC<Props> = ({date, handleOnSubmit, diary, handleOnChange}) => {


  const styles = useStyles();
  
  const titleElement = (
    <div className={styles.header}>
      <div className={styles.headerTitle}>
        <TextField id="title" name="title" variant="outlined" fullWidth={true} placeholder="タイトル" value={diary.title} onChange={handleOnChange} />
      </div>
      <div className={styles.headerDate}>
        <Typography>{date}</Typography>
      </div>
    </div>
  );

  return (
		<Card>
      <form onSubmit={handleOnSubmit}>
        <div>
          <CardHeader title={ titleElement } />
  
          <CardContent>
            <TextField id="body" name="body" variant="outlined" fullWidth={true} multiline={true} rows="20" placeholder="本文" value={diary.body} onChange={handleOnChange} />
          </CardContent>
  
          <div className={styles.btnGroup}>
            <div className={styles.btnGroupSide}>

            </div>
            <div className={styles.btnGroupCenter}>
              <Button type="submit" variant="contained" color="primary">
                日記を更新
              </Button>
            </div>
            <div className={styles.btnGroupSide}>

            </div>
          </div>
        </div>
      </form>  
    </Card>
  );
}

export default DiaryEdit;