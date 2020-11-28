import React, {FC, useState} from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import DiaryCard from 'components/molecules/Dairy/DiaryCard';
import {Diary as DiaryModel} from 'config/Models';
import { DialpadRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
}));

export type Data = DiaryModel;

type Props = {
  diaries: Data[];
};

const DiaryIndex: FC<Props> = ({ diaries }) => {

  return (
    <div>
      {
        diaries.length > 0
        ? Object.entries(diaries).map(([index, diary]) => (
            <DiaryCard
              title={diary.title}
              subheader={diary.subheader}
              body={diary.body}
              image={diary.image}
              key={diary.id ?? index}
            />
          ))
        : <Typography variant="h5" color="textSecondary">まだ日記を投稿していません</Typography>
      }
    </div>
  );
}

export default DiaryIndex;