import React from 'react';
import './App.css';

import dummyData from './dummy-data'

class App extends React.Component {
  construtor() {
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  render() {
    return (
      <h1>Instagram</h1>
    )
  }
}

export default App
