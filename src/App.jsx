import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
// import CssBaseline from '@mui/material/CssBaseline';
import {
  Trainee, InputDemo, TextFieldDemo, Login, ChildrenDemo, NoMatch,
} from './pages';
import AuthRoute from './routes/AuthRoute';
import { PrivateRoute } from './routes';
import TraineeDetail from './pages/Trainee/TraineeDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Trainee} />
          <AuthRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/trainee" component={Trainee} />
          <PrivateRoute exact path="/childrendemo" component={ChildrenDemo} />
          <PrivateRoute exact path="/textfielddemo" component={TextFieldDemo} />
          <PrivateRoute exact path="/inputdemo" component={InputDemo} />
          <PrivateRoute exact path="/trainee/:id" component={TraineeDetail} />
          <PrivateRoute component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
