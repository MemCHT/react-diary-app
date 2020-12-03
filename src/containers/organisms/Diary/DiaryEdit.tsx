import React, {FC, useEffect, useState} from 'react';
import { useHistory, useParams} from 'react-router-dom';
import {  } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import firebase from 'firebase';
import { database } from 'config/firebase';

import { useSelector } from 'react-redux';
import { AuthState } from 'reducer';

import DiaryEditComponent, {Props as DiaryEditComponentProps} from 'components/organisms/Diary/DiaryEdit';
import {Diary as DiaryModel} from 'config/Models';
import { format } from 'path';
import { Diary } from 'config/ViewModels';
import { resolve } from 'url';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
}));

const getFormatDate = (date: Date) => (
  `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
);

const loading_diary: DiaryModel = {
  id: "hoge",
  user_id: "hoge",
  title: "ロード中...",
  body: "ロード中...",
  subheader: "yyyy/mm/dd",
  image: "",
  updated_at: new Date()
}

const loaded_diary: DiaryModel = {
  id: "hoge",
  user_id: "hoge",
  title: "ロードされましたけど？",
  body: "ロードされましたけど？",
  subheader: "yyyy/mm/dd",
  image: "",
  updated_at: new Date()
}

const DiaryEdit: FC = () => {

  const history = useHistory();
  const { id } = useParams<{ id: DiaryModel['id'] }>();
  const user = useSelector<AuthState, firebase.User|undefined>((state) => state.user);

  const handleOnSubmit: DiaryEditComponentProps['handleOnSubmit'] = (event) => {
    event.preventDefault();

    if(user == undefined)
      throw new Error("ログインしていません");
    if(window.confirm('編集を完了しますか？') === false)
      return;

    const data = new FormData(event.target as HTMLFormElement);
    const today = new Date();
  
    /**
     * 型アサーションを使った悪い例だと思う。
     * 改善が必要。
     */
    const title = data.get('title') as string;
    const body = data.get('body') as string;
    const headerDate = getFormatDate(new Date());
  
    const submitDiary: DiaryModel = {
      id: id,
      user_id: user.uid,
      title: title,
      body: body,
      subheader: headerDate,
      image: "",
      updated_at: new Date()
    }
  
    database.collection("diaries").doc(submitDiary.id).update(submitDiary)
    .then((docRef) => {
      alert('編集を完了しました！');
      history.push('/diaries');
    })
    .catch((error) => alert('Error adding document: ' + error));
  }

  const [diary, setDiary] = useState<DiaryModel>();

  useEffect(()=>{
    database.collection('diaries').doc(id).get()
    .then((doc)=>{
      const exist_diary = doc.data() as DiaryModel;

      if(user && exist_diary.user_id == user.uid)
        setDiary(exist_diary as DiaryModel);
      else if(user && exist_diary.user_id != user.uid)
        return Promise.reject(new Error('不正なユーザーです'));

    }).catch((error)=>{
      alert(error);
      history.push('/diaries');
    })
  },[user]);

  /**
   * フォームの場合、ステートをvalueに渡す場合はonChangeで設定してあげないとテキストを変更できない。
   * ※普通のpropsなら、defaultValueに設定すれば変更できる。 
   */
  const handleOnChange: DiaryEditComponentProps['handleOnChange'] = (event) => {
    const target=event.target;
    if(diary)
      setDiary({...diary, [target.name]: target.value});
  };

  if(diary){
    return <DiaryEditComponent handleOnSubmit={handleOnSubmit} date={getFormatDate(new Date)} diary={diary} handleOnChange={handleOnChange} />;
  }else
    return <DiaryEditComponent handleOnSubmit={handleOnSubmit} date={getFormatDate(new Date)} diary={loading_diary} />;
    
}

export default DiaryEdit;