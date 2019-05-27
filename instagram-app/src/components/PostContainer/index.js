import React from 'react'
import PropTypes from 'prop-types'

import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

import { Heart, MessageCircle } from 'react-feather'
import CommentSection from '../CommentSection'

import './index.css'

dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)

const PostHeader = (props) => {
  const { thumbnailUrl, username } = props
  
  return (
    <header className="post-header">
      <img src={thumbnailUrl} alt={username} />
      <p>{username}</p>
    </header>
  )
}

const PostImage = (props) => {
  const { imageUrl } = props

  return (
    <main className="post-image">
      <img src={imageUrl} alt="Description not available" />
    </main>
  )
}

const PostMeta = (props) => {
  const {
    id,
    likes,
    comments,
    timestamp,
    handleLikeClick,
  } = props

  const postedTime = dayjs(timestamp, 'MMMM Do YYYY, hh:mm:ss a')
  const postedTimeFromNow = postedTime.fromNow()

  return (
    <footer className="post-footer">
      <div className="meta">
        <Heart className="icon" size="28" strokeWidth="1" onClick={handleLikeClick} />
        <MessageCircle className="icon" size="28" strokeWidth="1" />
        <p><span className="bold">{likes} likes</span></p>
      </div>
      <CommentSection id={id} comments={comments} />
      <div className="timestamp">
        <small>{postedTimeFromNow}</small>
      </div>
    </footer>
  )
}

class PostContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      post: this.props.post
    }
    this.handleLikeClick = this.handleLikeClick.bind(this)
  }

  componentDidMount() {
    this.setState({ post: this.props.post })
  }

  handleLikeClick() {
    this.setState({
      post: { ...this.state.post, likes: this.state.post.likes + 1 }
    })
  }
  
  render() {
    const { id } = this.state
    const {
      username,
      thumbnailUrl,
      imageUrl,
      likes,
      timestamp,
      comments,
    } = this.state.post
    
    return (
      <article className="post">
        <PostHeader
          thumbnailUrl={thumbnailUrl}
          username={username}
        />
        <PostImage imageUrl={imageUrl} />
        <PostMeta
          id={id}
          likes={likes}
          comments={comments}
          timestamp={timestamp}
          handleLikeClick={this.handleLikeClick}
        />
      </article>
    )
  }
}

PostContainer.propTypes = {
  id: PropTypes.number,
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array,
  })
}

export default PostContainer
