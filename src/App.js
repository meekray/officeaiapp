import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {extractDigits} from './logic/Helpers';
import TextField from '@material-ui/core/TextField';

class App extends Component {
  state = {
    error: false,
    output: ''
  }

  updateOutput = output => event => {
    var _newVal = extractDigits(event.target.value);
    this.setState({
      error: _newVal == "" || isNaN(_newVal) ? true : false,
      output: _newVal,
    });
  };

  render() {
    return (
      <div>
        <TextField
          id="name"
          label="Type any string to extact its digits"
          margin="normal"
          error={this.state.error}
          fullWidth
          onChange={this.updateOutput('output')}
          />
        <div className="App">
          <h1 className="App-title">{this.state.output}</h1>
        </div>
      </div>
    );
  }
}

export default App;
