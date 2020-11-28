import React, {FC, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { auth } from 'config/firebase';
import firebase from 'firebase';

import { login } from 'actions';
import { AuthState } from 'reducer';
import LoginComponent, {Props} from 'components/pages/Login';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
}));

const Login: FC = () => {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector<AuthState, firebase.User|undefined>((state) => state.user);
  const dispatch = useDispatch();

  const props: Props = {
    handleChange: (event) => {
      switch(event.target.name){
        case 'email':
          setEmail(event.target.value);
          break;
        case 'password':
          setPassword(event.target.value);
          break;
        default:
          alert("フォームチェック処理が足りません");
          break;
      }
    },

    handleSubmitLogin: (event) => {
      event.preventDefault();

      auth.signInWithEmailAndPassword(email, password)
      .then((value) => {

        if(value.user === null)
          throw new Error("Wrong data received");
        
        dispatch(login(value.user));

        alert('ログインできました！\n'/*+JSON.stringify(value.user)*/);

        history.push('/diaries');

      }).catch((error)=>{
        alert("ログインできませんでした\n");
      });
    }
  }

  return (
    <LoginComponent handleChange={props.handleChange} handleSubmitLogin={props.handleSubmitLogin} />
  );
}

export default Login;