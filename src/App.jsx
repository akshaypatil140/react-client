import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@material-ui/core';
import { AuthRoute, PrivateRoute } from './routes';
import {
  TextFieldDemo, InputDemo, ChildrenDemo, Trainee, Login, NoMatch,
} from './pages';
import TraineeDetail from './pages/Trainee/TraineeDetails';

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Typography>
      <Switch>
        <PrivateRoute exact path="/" component={Trainee} />
        <PrivateRoute exact path="/Trainee" component={Trainee} />
        <PrivateRoute exact path="/TextFieldDemo" component={TextFieldDemo} />
        <PrivateRoute exact path="/InputDemo" component={InputDemo} />
        <PrivateRoute exact path="/ChildrenDemo" component={ChildrenDemo} />
        <AuthRoute exact path="/Login" component={Login} />
        <PrivateRoute exact path="/trainee/:id" component={TraineeDetail} />
        <PrivateRoute component={NoMatch} />
      </Switch>
    </Typography>

  </BrowserRouter>
);

export default App;
