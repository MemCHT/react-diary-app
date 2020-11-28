import React, {FC, useState} from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography, colors } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import {Diary as DiaryModel} from 'config/ViewModels';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginBottom: '2em'
  },
  body: {
    whiteSpace: 'pre-wrap',
    lineHeight: '1.75em',
    fontSize: '1.25em'
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

type Props = DiaryModel;

const DiaryCard: FC<Props> = ({
  title = "init title",
  subheader = "yyyy/mm/dd",
  body = "init body",
  image,
}) => {

  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Card>

        <CardHeader
          title={ title }
          subheader={ subheader }
          className={ styles.header }
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