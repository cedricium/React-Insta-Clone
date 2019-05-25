import React from 'react';
import './App.css';

import dummyData from './dummy-data'

import SearchBar from './components/SearchBar'
import PostContainer from './components/PostContainer'

class App extends React.Component {
  state = {
    search: '',
    posts: [],
    filteredPosts: [],
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
      filteredPosts: dummyData,
    })
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchChange(event) {
    const searchTerm = event.target.value
    const matchingPosts =
      this.state.posts.slice().filter(post => post.username.includes(searchTerm))

    this.setState({
      search: searchTerm,
      filteredPosts: matchingPosts
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.state.search} handleSearchChange={this.handleSearchChange} />
        <main className="posts-list">
          {this.state.filteredPosts.map(post => (
            <PostContainer key={post.timestamp} post={post} />
          ))}
        </main>
      </div>
    )
  }
}

export default App
