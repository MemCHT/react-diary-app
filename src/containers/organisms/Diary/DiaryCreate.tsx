import React, {FC, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {  } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import firebase from 'firebase';
import { database } from 'config/firebase';

import { useSelector } from 'react-redux';
import { AuthState } from 'reducer';

import DiaryCreateComponent, {Props} from 'components/organisms/Diary/DiaryCreate';
import {Diary as DiaryModel} from 'config/Models';
import { format } from 'path';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
}));

const getFormatDate = (date: Date) => (
  `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
);

const DiaryCreate: FC = () => {

  const history = useHistory();
  const user = useSelector<AuthState, firebase.User|undefined>((state) => state.user);

  const handleOnSubmit: Props['handleOnSubmit'] = (event) => {
    if(user == undefined)
      throw new Error("ログインしていません");
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const today = new Date();
  
    /**
     * 型アサーションを使った悪い例だと思う。
     * 改善が必要。
     */
    const title = data.get('title') as string;
    const body = data.get('body') as string;
    const headerDate = getFormatDate(new Date());
  
    const diary: DiaryModel = {
      user_id: user.uid,
      title: title,
      body: body,
      subheader: headerDate,
      image: "",
      created_at: new Date(),
      updated_at: new Date()
    }
  
    database.collection("diaries").add(diary)
    .then((docRef) => {
      alert("日記を作成しました！");
      history.push("/diaries");
    })
    .catch((error) => alert("Error adding documet: " + error));
  }

  return (
    <DiaryCreateComponent handleOnSubmit={handleOnSubmit} date={getFormatDate(new Date)} />
  );
}

export default DiaryCreate;