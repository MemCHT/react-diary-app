import React, {FC, useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {  } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import firebase from 'firebase';
import { database } from 'config/firebase';
import { timestampToDateRecursively } from 'helpers/ForFirestore';

import { AuthState } from 'reducer';
import DiaryIndexComponent, {Data as DataType, Props as DiaryIndexProps} from 'components/organisms/Diary/DiaryIndex';
import Loading from 'components/atoms/Loading';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
}));

const DiaryIndex: FC = () => {

  const history = useHistory();

  const user = useSelector<AuthState, firebase.User|undefined>((state) => state.user);

  // {[keyがnumberで]: 中身がDataの配列}をもつオブジェクト
  const [data, setData] = useState<DataType[]>();

  useEffect(()=>{
    // alert(JSON.stringify(user));
    getDiaries(user);
      
  },[user]);

  const getDiaries = (user: firebase.User | undefined) => {
    if(user)
      database.collection('diaries').where('user_id', '==', user.uid).orderBy('updated_at', 'desc').get().then((querySnapshot) => {
        

        const diaries = querySnapshot.docs.map(doc => {

          // firestoreのdataはfirestore.Timestamp型なので、jsのdateに変換する必要がある。
          const data = timestampToDateRecursively(doc.data());
          return Object.assign(data, {id: doc.id}) as DataType;
        });
        setData(diaries);
      }).catch((error) => {
        // alert("データを取得できません!\n"+error);
      });
  }

  const handleClickEdit: DiaryIndexProps['handleClickEdit'] = (id: string) => {
  
    return (event) => {
      event.preventDefault();
      history.push(`/diaries/${id}/edit`);
    };
  }

  const handleClickDestroy: DiaryIndexProps['handleClickDestroy'] = (id: string) => {
  
    return (event) => {
      event.preventDefault();

      if(window.confirm('日記を削除しますか？') === false)
        return;

      database.collection('diaries').doc(id).delete()
      .then(()=>{
        alert('日記を削除しました！');
        getDiaries(user);
      }).catch(()=>{
        alert('日記の削除に失敗しました...');
      });
    };
  }

  return (
    // 型アサーションは害になることが多いので、ほかの書き方を見つける。
    <>
      { getData(data, handleClickEdit, handleClickDestroy) }
    </>
  );
}

const getData = (data: DataType[] | undefined, handleClickEdit: DiaryIndexProps['handleClickEdit'], handleClickDestroy: DiaryIndexProps['handleClickDestroy']) => {
  if(data){
    return <DiaryIndexComponent diaries={data as DataType[]} handleClickEdit={handleClickEdit} handleClickDestroy={handleClickDestroy}/>;
  }
  return <Loading/>;
}

export default DiaryIndex;