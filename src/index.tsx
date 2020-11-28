import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { colors, Grid, CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { authReducer, initialState } from 'reducer';

const store = createStore(authReducer, initialState);

const theme: Theme = createMuiTheme({
  palette: {
    primary: colors.blue,
    type: 'dark'
  },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif'
  }
});

const classes = makeStyles((theme: Theme) => 
  createStyles({
    root: {
       
    }
  })
);

ReactDOM.render(               
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
