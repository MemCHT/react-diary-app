import React, {FC, useState} from 'react';
import { Toolbar, Link, Typography, Button, Grid, Hidden } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import { auth } from 'config/firebase';
import { AuthState } from 'reducer';
import { logout } from 'actions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) => createStyles({
    toolbar: {
			borderBottom: `1px solid ${theme.palette.divider}`,
			display: 'flex',
    },
    toolbarTitle: {
      flex: 1,
        textAlign: 'center',
		},
		toolbarButton: {
			width: '10em',
			margin: '0 0.5em'
		},
		toolbarLeft: {
			flex: 1,
		},
		toolbarCenter: {
			flex: 1,
		},
		toolbarRight: {
			flex: 1,
			textAlign: "right"
		}

}));

const Header: FC = () => {
    const styles = useStyles();
		const user = useSelector<AuthState, AuthState['user']>((state) => state.user);
		const dispatch = useDispatch();
		const history = useHistory();

    return(
			<Grid container justify="center">
				<Hidden xsDown>
					<Grid item xs={10}>
						<Toolbar className={styles.toolbar}>
							<div className={styles.toolbarLeft}>
								<Button variant="outlined" className={styles.toolbarButton}
									onClick={()=>{
										if(user)
											history.push('/diaries');
										else
											history.push('/login');
									}}
								>
									ホーム
								</Button>
							</div>

							<div className={styles.toolbarCenter}>
								<Typography
									component="h1"
									variant="h4"
									className={styles.toolbarTitle}
								>
									Diary-app
								</Typography>
							</div>

							<div className={styles.toolbarRight}>
								{
									// 必ず後でリファクタリングすること。具体的にはコンテナに分けて、親コンポーネントで使うのをコンテナの方に変更
									user
									?	<Button variant="outlined" href="/login" onClick={(event)=>{
										event.preventDefault();

										auth.signOut().then(()=>{
											alert("ログアウトしました");
											dispatch(logout());
											history.push('/login');
										})
									}} className={styles.toolbarButton}>
											ログアウト
										</Button>
									:	<>
											<Button variant="outlined" className={styles.toolbarButton}
												onClick={()=>{history.push('/login')}}
											>
												ログイン
											</Button>
											<Button variant="outlined" className={styles.toolbarButton}
												onClick={()=>{history.push('/register')}}
											>
												新規登録
											</Button>
										</>
								}
							</div>
						</Toolbar>
					</Grid>
				</Hidden>
			</Grid>
    );
};

export default Header;