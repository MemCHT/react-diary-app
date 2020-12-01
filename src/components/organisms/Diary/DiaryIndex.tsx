import React, {FC, useState} from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import DiaryCard, {Props as DiaryCardProps} from 'components/molecules/Dairy/DiaryCard';
import {Diary as DiaryModel} from 'config/Models';
import { DialpadRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
}));

export type Data = DiaryModel;

export type Props = {
  diaries: Data[];
  handleClickEdit?: (id: string) => DiaryCardProps['handleClickEdit'],
  handleClickDestroy?: (id: string) => DiaryCardProps['handleClickDestroy']
};

const DiaryIndex: FC<Props> = ({ diaries, handleClickEdit, handleClickDestroy }) => {

  return (
    <div>
      {
        diaries.length > 0
        ? Object.entries(diaries).map(([index, diary]) => (
            <DiaryCard
              title={diary.title}
              subheader={diary.updated_at ? getFormatDate(diary.updated_at) : diary.subheader}
              body={diary.body}
              image={diary.image}
              key={diary.id ?? index}
              handleClickEdit={ handleClickEdit ? handleClickEdit(diary.id) : undefined }
              handleClickDestroy={ handleClickDestroy ? handleClickDestroy(diary.id) : undefined }
            />
          ))
        : <Typography variant="h5" color="textSecondary">まだ日記を投稿していません</Typography>
      }
    </div>
  );
}

const getFormatDate = (date: Date) => {
  // alert(JSON.stringify(date));
  return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

export default DiaryIndex;