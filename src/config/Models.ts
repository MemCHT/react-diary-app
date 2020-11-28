/**
 * firebaseと接続するDBテーブルの型定義ファイル
 */

export type Diary = {
  id?: any;
  user_id: string;
  title: string;
  subheader: string;
  body: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
};