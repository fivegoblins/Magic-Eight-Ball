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
        random: Math.floor(Math.random() * 20),
        input: ''
      });
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({input: event.target.value});
  }

  render() {
    const responses = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt', 
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy, try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it', 
      'No',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];

    const answer = responses[this.state.random];

    return (
      <div className="App">
        <div className='ask-div'>
         <header className="header">
          Ask the Magic Eight Ball
          </header>
            <div className='question-div'>
            <input
            className='question-input'
            type='text'
            placeholder='Your Question'
            value={this.state.input}
            onChange={this.handleChange}
           />
            <button 
              onClick={this.ask}
              className='ask-button'
            >
              Ask
            </button>
          </div>
          <h3 className='answer'>{answer}</h3>
        </div>
      </div>
    );
  }
}

export default App;
