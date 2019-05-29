import React from 'react'

import dummyData from '../../dummy-data'

import SearchBar from '../SearchBar'
import PostContainer from '../PostContainer'

class PostsPage extends React.Component {
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
      filteredPosts: matchingPosts,
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.state.search} handleSearchChange={this.handleSearchChange} />
        <main className="posts-list">
          {this.state.filteredPosts.map((post, index) => (
            <PostContainer key={index} post={post} id={index} />
          ))}
        </main>
      </div>
    )
  }
}

export default PostsPage
