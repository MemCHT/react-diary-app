import React, {FC, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {  } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import {AuthState} from 'reducer';
import {login} from 'actions';
import firebase from 'firebase';
import {auth, database} from 'config/firebase';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
}));

type Props = {
  children: any;  // 仮置き、childrenにあたる部分はなんだろう。
};

export const Auth: FC<Props> = ({children}) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector<AuthState, firebase.User | undefined>((state)=>state.user);

  // ログイン情報をルート先に反映させる。
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(login(user as firebase.User));
      }else{
        // alert("ログインしていません");
        history.push("/login");
      }
    })
  },[]);

  if(user)
    return children;
  else
    return (<></>)
}

export default Auth;