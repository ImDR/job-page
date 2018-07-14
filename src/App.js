import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Job from './components/Job';
import './css/bootstrap.min.css';
import './css/index.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Job />
      </Provider>
    );
  }
}

export default App;