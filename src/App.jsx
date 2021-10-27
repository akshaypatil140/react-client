/* eslint-disable import/named */
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
// import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import theme from './theme';
import { AuthRoute, PrivateRoute } from './routes';
import {
  TextFieldDemo, InputDemo, ChildrenDemo, Trainee, Login, NoMatch,
} from './pages';

const App = () => (
  <BrowserRouter>
    <CssBaseline />

    <Switch>
      <PrivateRoute exact path="/" component={Trainee} />
      <PrivateRoute exact path="/Trainee" component={Trainee} />
      <PrivateRoute exact path="/TextFieldDemo" component={TextFieldDemo} />
      <PrivateRoute exact path="/InputDemo" component={InputDemo} />
      <PrivateRoute exact path="/ChildrenDemo" component={ChildrenDemo} />
      <AuthRoute exact path="/Login" component={Login} />
      <PrivateRoute component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default App;
