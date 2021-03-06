import React, {FC, useState} from 'react';
import { Card, CardContent, TextField, Button, Typography, Link, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginTop: '3em'
  },
  formTitle: {
    textAlign: 'center',
    margin: '1em 0 2em 0'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: '1.5em'
    }
  }
}));

export type Props = {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitLogin?: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
};

const Login: FC<Props> = ({handleChange, handleSubmitLogin}) => {

  const styles = useStyles();
  const history = useHistory();

  return (
    <Grid container justify="center">
      <Grid item xs={8}>
        <Card className={styles.root}>
          <CardContent>
            <Typography variant='h4' className={styles.formTitle}>ログイン</Typography>

            <form onSubmit={handleSubmitLogin} className={styles.formGroup}>
              <Typography>※開発中のため、テストアカウントをお使いください。</Typography>
              <Typography>メールアドレス：<strong>test@example.com</strong>、パスワード：<strong>5F4DCC3B5AA765D61D8327DEB882CF99</strong></Typography>
              <TextField id="email" type="email" name="email" onChange={handleChange} label="メールアドレス" variant='outlined' fullWidth placeholder="example@example.com" required />
              <TextField id="password" type="password" name="password" onChange={handleChange} label="パスワード" variant='outlined' fullWidth placeholder="hogehoge" required />
              <Button id="loginButton" type="submit" variant='contained'>ログイン</Button>
              <Typography>
                新規登録は<Link onClick={()=>{history.push('/register')}}>コチラ</Link>
              </Typography>
            </form>
            
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Login;