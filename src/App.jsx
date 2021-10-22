import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import theme from './theme';
import { ChildrenDemo } from './pages';

// import logo from './logo.svg';
// import './App.css';
// import TextFieldDemo from './pages/TextFieldDemo/TextFieldDemo';
// import InputDemo from './pages/InputDemo/InputDemo';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <div className="App"> */}
      {/* <TextFieldDemo /> */}
      {/* <InputDemo />
      </div> */}

      <Typography>
        <ChildrenDemo />
      </Typography>
    </ThemeProvider>
  );
}

export default App;
