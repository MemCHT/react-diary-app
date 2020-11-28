import React, {FC, useState} from 'react';
import { Card, CardContent, TextField, Button, Typography, Link, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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

export type Validation = {
  [key: string]: string | number | boolean;
};

export type Props = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitRegister: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  validation: {
    email?: Validation;
    password?: Validation;
    passwordConfirm?: Validation;
  }
};

const Register: FC<Props> = ({handleChange, handleSubmitRegister, handleBlur, validation}) => {

  const styles = useStyles();

  return (
    <Grid container justify="center">
      <Grid md={8}>
        <Card className={styles.root}>
          <CardContent>
            <Typography variant='h4' className={styles.formTitle}>新規登録</Typography>

            <form onSubmit={handleSubmitRegister} className={styles.formGroup}>
              <TextField id="email" type="email" name="email" onChange={handleChange} label="メールアドレス" variant='outlined' fullWidth placeholder="example@example.com" {...(validation?.email)} required />
              <Typography>{JSON.stringify(validation)}</Typography>
              <TextField id="password" type="password" name="password" onChange={handleChange} onBlur={handleBlur} label="パスワード" variant='outlined' fullWidth placeholder="hogehoge" {...(validation?.password)} required />
              <TextField id="passwordConfirm" type="password" name="password_confirm" onChange={handleChange} onBlur={handleBlur} label="パスワード（確認）" variant='outlined' fullWidth placeholder="hogehoge" {...validation?.passwordConfirm} required />
              <Button id="registerButton" type="submit" variant='contained'>新規登録</Button>
              <Typography>
                すでに登録済みの方は<Link href="/login">コチラ</Link>
              </Typography>
            </form>
            
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Register;