import React, {FC, useState} from 'react';
import { Toolbar, Link, Typography, Button, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import { auth } from 'config/firebase';
import { AuthState } from 'reducer';
import { logout } from 'actions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) => createStyles({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbarTitle: {
      flex: 1,
        textAlign: 'center',
		},
		toolbarButton: {
			width: '10em'
		}

}));

const Header: FC = () => {
    const styles = useStyles();
		const user = useSelector<AuthState, AuthState['user']>((state) => state.user);
		const dispatch = useDispatch();
		const history = useHistory();

    return(
			<Grid container justify="center">
				<Grid item xs={10}>
					<Toolbar className={styles.toolbar}>
						<Button variant="outlined" href="#" className={styles.toolbarButton}>
							ホーム
						</Button>

						<Typography
							component="h1"
							variant="h4"
							className={styles.toolbarTitle}
						>
							タイトル
						</Typography>

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
							:	<div>
									<Button variant="outlined" href="/login" className={styles.toolbarButton}>
										ログイン
									</Button>
									<Button variant="outlined" href="/register" className={styles.toolbarButton}>
										新規登録
									</Button>
								</div>
						}
					</Toolbar>
				</Grid>
			</Grid>
    );
};

export default Header;