import React, {FC, useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {  } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import firebase from 'firebase';
import { database } from 'config/firebase';

import { AuthState } from 'reducer';
import DiaryIndexComponent, {Data as DataType} from 'components/organisms/Diary/DiaryIndex';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
}));

const loading_data: DataType[] = [
  {
    id: 1,
    user_id: "example@example.com",
    title: 'ロード中です...',
    subheader: 'yyyy/mm/dd',
    body: 'ロード中です...',
    image: 'logo192.png',
    created_at: new Date('yyyy/mm/dd'),
    updated_at: new Date('yyyy/mm/dd')
  },
  {
    id: 2,
    user_id: "example@example.com",
    title: 'ロード中です...',
    subheader: 'yyyy/mm/dd',
    body: 'ロード中です...',
    image: 'logo192.png',
    created_at: new Date('yyyy/mm/dd'),
    updated_at: new Date('yyyy/mm/dd')
  },{
    id: 3,
    user_id: "example@example.com",
    title: 'ロード中です...',
    subheader: 'yyyy/mm/dd',
    body: 'ロード中です...',
    image: 'logo192.png',
    created_at: new Date('yyyy/mm/dd'),
    updated_at: new Date('yyyy/mm/dd')
  },
]

const DiaryIndex: FC = () => {

  const user = useSelector<AuthState, firebase.User|undefined>((state) => state.user);

  // {[keyがnumberで]: 中身がDataの配列}をもつオブジェクト
  const [data, setData] = useState<DataType[]>();

  useEffect(()=>{
    // alert(JSON.stringify(user));
    if(user)
      database.collection('diaries').where('user_id', '==', user.uid).orderBy('updated_at', 'desc').get().then((querySnapshot) => {
        
        const diaries = querySnapshot.docs.map(doc => Object.assign(doc.data(), {id: doc.id}) as DataType);
        setData(diaries);
      }).catch((error) => {
        // alert("データを取得できません!\n"+error);
      });
  },[user]);

  /*useEffect(() => {
    if(user){
      alert(JSON.stringify(user));
    }
  }, [user])*/

  return (
    // 型アサーションは害になることが多いので、ほかの書き方を見つける。
    <>
      { getData(data) }
    </>
  );
}

const getData = (data: DataType[] | undefined) => {
  if(data){
    return <DiaryIndexComponent diaries={data as DataType[]}/>;
  }
  return <DiaryIndexComponent diaries={loading_data}/>;
}

export default DiaryIndex;