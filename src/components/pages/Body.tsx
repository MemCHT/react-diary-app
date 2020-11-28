import React, {FC, useState} from 'react';
import { Grid, Link } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import SideMenu from 'components/organisms/SideMenu';
import { relative } from 'path';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
  },
  contentsWrap: {
    position: 'relative',
    margin: 'auto',
  },
  sideMenu: {
    position: 'relative'
  },
  sideMenuContent: {
    position: 'fixed',
    top: '15em'
  },
  main: {
    marginTop: '3em'
  },
}));

const Body: FC = (props: any) => {

  const styles = useStyles();

  return (
    <Grid container justify="center" className={ styles.root }>
      <Grid item xs={10}>
      {/*alert(React.Children.map(props.children, (value, key) => key + ':' + value))}{/* TODO コンポネントの中身が空の時の判定法 -> body外のrouteを上に配置することで解決 */}

        <main>
          <Grid item xs={10} container justify="center" spacing={2} className={ styles.contentsWrap }>
            
            {/* 固定の左側コンテンツが入る */}
            <Grid item xs={3} className={ styles.sideMenu }>
              <div className={ styles.sideMenuContent }>
                <SideMenu />
              </div>
            </Grid>

            {/* ルーティングされたコンテンツが入る */}
            <Grid item xs={6} {...props} className={ styles.main }/>
            
            {/* 固定の右側コンテンツが入る */}
            <Grid item xs={3}>
              <Link href="/">
                home
              </Link>
              <Link href="/counter">
                counter
              </Link>
              <Link href="/diaries">
                index
              </Link>
            </Grid>

          </Grid>
        </main>

      </Grid>
    </Grid>
  );
}

export default Body;