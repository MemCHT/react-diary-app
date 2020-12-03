import React, {Component, FC, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Typography, ListItem, Button} from '@material-ui/core';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Home as HomeIcon, List as ListIcon, Bookmarks as BookmarksIcon, Person as PersonIcon, } from '@material-ui/icons';


const listItems = {
	'home': ['ホーム', '/diaries'],
	'index': ['一覧', '/diaries'],
	'bookmark': ['ブックマーク', '#'],
	'mypage': ['マイページ', '#']
};

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column'
	},
	linkItem: {
		fontSize: '1.8em',
		fontWeight: 'bold'
	},
	icon: {
		marginRight: '0.5em',
		fontSize: '2em'
	},
	createButton: {
		fontSize: '2em',
		fontWeigh: 'bold',
		flex: 1,
		margin: '1em 1em 0 1em',
	}
}));

const SideMenu: FC = () => {
	const styles = useStyles();
	const history = useHistory();

	return (
		<div className={ styles.root }>
			{ Object.entries(listItems).map(([property, [text, link]], key)=>(
				<ListItemLink
					key={ key }
					onClick={()=>{history.push(link)}}
					className = { styles.linkItem }
				>
					<SideBarIcon name={property} />{ text }
				</ListItemLink>
			))}

			<Button
				variant="contained"
				onClick={()=>{history.push('/diaries/create')}}
				className={ styles.createButton }
			>
				日記を書く
			</Button>
		</div>
	);
}

// 新しく定義しないと、ListItemをcomponent="a"として使えなかった。（material-uiリファレンス推奨の実装方法）
const ListItemLink = (props: any) => {
	return <ListItem button component="a" {...props} />;
}

type Props = {
	name: string;
};

const SideBarIcon: FC<{name: string}> = ({name}) => {
	
	const styles = useStyles();

	switch(name){
		case 'home':
			return <HomeIcon className={ styles.icon }/>;
			break;
		case 'index':
			return <ListIcon className={ styles.icon }/>;
			break;
		case 'bookmark':
			return <BookmarksIcon className={ styles.icon }/>;
			break;
		case 'mypage':
			return <PersonIcon className={ styles.icon } />;
			break;
		default:
			return <></>;
			break;
	}
};

export default SideMenu;