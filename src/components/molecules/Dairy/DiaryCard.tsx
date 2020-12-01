import React, {FC, useState} from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography, colors } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Edit as EditIcon, Delete as DestroyIcon } from '@material-ui/icons';

import MoreMenu, {Props as MoreMenuProps} from 'components/atoms/MoreMenu';
import {Diary as DiaryModel} from 'config/ViewModels';
import { isPropertySignature } from 'typescript';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginBottom: '2em'
  },
  body: {
    whiteSpace: 'pre-wrap',
    lineHeight: '1.5em',
    fontSize: '1.125em'
  },
  media: {
    width: '15em',
    height: '15em',
    backgroundColor: colors.grey[900]
  },
  header: {
    borderBottom: `2px solid ${colors.grey[700]}`
  }
}));

export type Props = DiaryModel & {
  handleClickEdit?: MoreMenuProps['items'][0]['action'],
  handleClickDestroy?: MoreMenuProps['items'][0]['action']
};

const DiaryCard: FC<Props> = ({
  title = "init title",
  subheader = "yyyy/mm/dd",
  body = "init body",
  image,
  handleClickEdit,
  handleClickDestroy
}) => {

  const styles = useStyles();

  // 日記カードのメニュー用オブジェクト
const menuItems: MoreMenuProps['items'] =  [
  {
    action: handleClickEdit,
    listItem: <EditIcon/>,
    listText: '編集'
  },
  {
    action: handleClickDestroy,
    listItem: <DestroyIcon/>,
    listText: '削除'
  }
];

  return (
    <div className={styles.root}>
      <Card>

        <CardHeader
          title={ title }
          subheader={ subheader }
          className={ styles.header }
          action={
            <MoreMenu
              items = {menuItems}
            />
          }
        />

        <CardContent>
          <Typography
            variant="body1"
            component="p"
            color="textSecondary"
            className={styles.body}
          >
            { body }
          </Typography>
        </CardContent>

        {
          image ?
            <CardMedia
              image={ `${process.env.PUBLIC_URL}/images/pictures/${image}` }
              title={ image }
              className={styles.media}/>
          : null
          /*
            ()=>{
            if(image)
              return (
                <CardMedia
                  image={ `${process.env.PUBLIC_URL}/images/pictures/${image}` }
                  title={ image }
                  className={styles.media}
                />
              );
            }
          */
        }

      </Card>
    </div>
  );
}

export default DiaryCard;