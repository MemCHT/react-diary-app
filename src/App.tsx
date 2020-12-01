import React, {FC} from 'react';
import { Route, Switch, useHistory } from 'react-router';
import { colors, Grid, CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Header from 'components/organisms/Header';
import Counter from 'components/organisms/Counter';
import Body from 'components/pages/Body';
import DiaryIndex from 'containers/organisms/Diary/DiaryIndex';
import DiaryCreate from 'containers/organisms/Diary/DiaryCreate';
import Calendar from 'containers/molecules/Calendar';
import Login from 'containers/pages/Login';
import Register from 'containers/pages/Register';
import Auth from 'Auth';
import DiaryEdit from 'containers/organisms/Diary/DiaryEdit';

const App: FC = () => {
  return (
    <div id="App">
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      
        <Body>
          <Route path="/counter" component={Counter} />

          <Route path="/test">
            おｋ
          </Route>

          <Auth>
            <Route exact path="/diaries" component={DiaryIndex} />
            <Route path="/diaries/create" component={DiaryCreate} />
            <Route path="/diaries/:id/edit" component={DiaryEdit} />
          </Auth>
          <Route path="/calendar" component={Calendar} />
        </Body>
      </Switch>
    </div>
  );
};

export default App;
