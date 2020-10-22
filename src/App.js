import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Switch} from 'react-router-dom';

import GlobalStyle from './styles/global-style';

import AppBaner from './components/app-baner/app-baner.component';

import StartPage from './pages/start-page/start-page.component';
import BoardPage from './pages/board-page/board-page.component';

import AuthenticatedRoute from './custom-routes/authenticated-route';
import UnauthenticatedRoute from './custom-routes/unathenticated-route';

import {selectSession} from './redux/game/game-selectors';

const App = ({session}) => (
  <>
    <GlobalStyle />
    <AppBaner />
    <Switch>
      <UnauthenticatedRoute
        exact path="/"
        component={StartPage}
        appProps={{session}}
      />
      <AuthenticatedRoute
        exact path="/board"
        component={BoardPage}
        appProps={{session}}
      />
    </Switch>
  </>
);

const mapStateToProps = createStructuredSelector({
  session: selectSession
});

export default connect(mapStateToProps)(App);
