import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './helpers';
import Trading from './components/trading';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Simple trading application</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Trading />
            </div>
        </Provider>
    );
  }
}

export default App;
