import React, {FC, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {  } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        /*database.collection("users").doc(user.uid).get()
          .then(snapshot => {

          })*/
        // alert(user);
        // auth.signOut();
        dispatch(login(user as firebase.User));
      }else{
        // alert("ログインしていません");
        history.push("/login");
      }
    })
  },[]);

  return children;
}

export default Auth;