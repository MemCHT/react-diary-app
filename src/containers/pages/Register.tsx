import React, {FC, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { auth } from 'config/firebase';
import firebase from 'firebase';

import { register } from 'actions';
import { AuthState } from 'reducer';
import RegisterComponent, {Props, Validation} from 'components/pages/Register';
import { ReactComponent } from '*.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    
  },
}));

const Register: FC = () => {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [validation, setValidation] = useState({
    email: {},
    password: {},
    passwordConfirm: {}
  });

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
        case 'password_confirm':
          setPasswordConfirm(event.target.value);
          break;
        default:
          alert("フォームチェック処理が足りません");
          break;
      }
    },

    handleSubmitRegister: (event) => {
      event.preventDefault();

      auth.createUserWithEmailAndPassword(email, password)
      .then((value) => {

        if(value.user === null)
          throw new Error("Wrong data received");
        
        dispatch(register(value.user));

        alert('登録できました！\n');

        history.push('/diaries');

      }).catch((error)=>{
        alert("登録できませんでした\nerror: "+error);
      });
    },

    handleBlur: (event)=>{
      if(password !== passwordConfirm){

        setValidation({...validation, password: Object.assign(validation.password, {error: true})});
        setValidation({...validation, passwordConfirm: Object.assign(validation.passwordConfirm, {error: true})});

      }else{

        setValidation({...validation, password: Object.assign(validation.password, {error: false})});
        setValidation({...validation, passwordConfirm: Object.assign(validation.passwordConfirm, {error: false})});

      }
    },

    validation: validation
  }

  return (
    <RegisterComponent handleChange={props.handleChange} handleSubmitRegister={props.handleSubmitRegister} handleBlur={props.handleBlur} validation={validation} />
  );
}

export default Register;