// React
import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Material-UI
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


// Custom
import settings from '../settings';

import Bar from '../layout/Bar/Bar';

import HomeContent from '../content/HomeContent/HomeContent';
import Test from '../content/Test/Test'

import LeftDrawer from '../components/Menu/LeftDrawer'
import ClCamera from '../components/Image/ClCamera'
import NotFoundContent from '../content/NotFoundContent/NotFoundContent';




let theme = createMuiTheme({
  palette: {
    primary: settings.theme.primaryColor.import,
    secondary: settings.theme.secondaryColor.import,
    type: settings.theme.type
  }
});

class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      primaryColor: settings.theme.primaryColor.name,
      secondaryColor: settings.theme.secondaryColor.name,
      type: settings.theme.type,
    };
  }

  

  render() {
    
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div style={{ minHeight: '100vh', backgroundColor: theme.palette.type === 'dark' ? '#303030' : '#fafafa' }}>
           <LeftDrawer></LeftDrawer>
           
          
            <Switch>
                  <Route path="/" exact render={() => (<HomeContent isSignedIn={true} title={"Digi"} />)} />
                  <Route path="/some-magic" component={Test}/>
                  <Route path="/image" component={ClCamera}/>
                  <Route component={NotFoundContent} />
            </Switch>

               
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }

  componentDidMount() {
    this._isMounted = true;

    const theme = JSON.parse(localStorage.getItem('theme'));

    if (theme) {
      this.updateTheme(theme);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default App;
