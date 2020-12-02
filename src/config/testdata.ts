import {Data as DataType, Props as DiaryIndexProps} from 'components/organisms/Diary/DiaryIndex';


export const loading_data: DataType[] = [
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

export const calendar_data = {
  month: 1,
  days: [
    [-1, -1, -1, 1, 2, 3, 4],
    [5, 6 ,7 ,8 ,9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31],
  ],
  maxDay: 31
}; 