import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { contacts: []}
  }


  componentDidMount() {
    fetch('https://api.randomuser.me/?nat=us,gb&results=20')
        .then(res => res.json())
        .then(res => {
          this.setState({ contacts: res.results })
        })
  }

  render() {
    return (
      <div className="App">
        <Contacts contacts={ this.state.contacts }/>
      </div>
    );
  }
}

export default App;
