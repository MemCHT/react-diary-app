import React, {FC, useState} from 'react';
import { Grid, Link, Hidden } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import SideMenu from 'components/organisms/SideMenu';
import SideBar from 'components/organisms/SideBar';
import { relative } from 'path';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    
  },
  contents: {
    width: '1300px',
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
    top: '15em',
  },
  mainWrap: {
    paddingRight: '0 !important',
    paddingLeft: '0 !important',
    marginTop: '3em',
  },
  main: {
    
  },
  sideBar: {
    marginTop: '3em'
  }
}));

const Body: FC = (props: any) => {

  const styles = useStyles();

  return (
    <Grid container justify="center" className={ styles.root }>
      <Grid item className={ styles.contents }>
      {/*alert(React.Children.map(props.children, (value, key) => key + ':' + value))}{/* TODO コンポネントの中身が空の時の判定法 -> body外のrouteを上に配置することで解決 */}

        <main>
          <Grid item md={11} container justify="center" spacing={2} className={ styles.contentsWrap }>
            
            {/* 固定の左側コンテンツが入る */}
            <Hidden smDown>
              <Grid item xs={3} md={false} className={styles.sideMenu}>
                <div className={styles.sideMenuContent}>
                  <SideMenu/>
                </div>
              </Grid>
            </Hidden>

            {/* ルーティングされたコンテンツが入る */}
            <Grid item md={6} {...props} className={ styles.mainWrap }>
            </Grid>
            
            {/* 固定の右側コンテンツが入る */}
            <Hidden smDown>
              <Grid item xs={3} md={false} className={styles.sideBar}>
                <SideBar/>
              </Grid>
            </Hidden>

          </Grid>
        </main>

      </Grid>
    </Grid>
  );
}

export default Body;