import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      random: ''
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  ask() {
    if (this.state.input) {
      this.setState({
        input: '',
        random: Math.floor(Math.random() * 20)
      });
    }
  }

  handleChange(e) {
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
