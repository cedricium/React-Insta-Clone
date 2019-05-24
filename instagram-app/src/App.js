import React from 'react';
import './App.css';

import dummyData from './dummy-data'

import SearchBar from './components/SearchBar'
import PostContainer from './components/PostContainer'

class App extends React.Component {
  state = {
    posts: []
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
        <main className="posts-list">
          {this.state.posts.map(post => (
            <PostContainer key={post.timestamp} post={post} />
          ))}
        </main>
      </div>
    )
  }
}

export default App
