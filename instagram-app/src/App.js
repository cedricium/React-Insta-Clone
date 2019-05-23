import React from 'react';
import './App.css';

import dummyData from './dummy-data'

import SearchBar from './components/SearchBar'

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
      <div className="App">

        <SearchBar />
      </div>
    )
  }
}

export default App
