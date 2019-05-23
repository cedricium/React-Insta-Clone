import React from 'react'
import './index.css'

import CommentSection from '../CommentSection'

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
      <img src={imageUrl} alt="instagram photo" />
    </main>
  )
}

const PostMeta = (props) => {
  const {
    likes,
    comments,
    timestamp
  } = props

  return (
    <footer className="post-footer">
      <div className="meta">
        <i>Love</i>
        <i>Comment</i>
        <p><span className="bold">{likes} likes</span></p>
      </div>
      <CommentSection comments={comments} />
      <div className="timestamp">
        <small>{timestamp}</small>
      </div>
    </footer>
  )
}

const PostContainer = ({ post }) => {
  const {
    username,
    thumbnailUrl,
    imageUrl,
    likes,
    timestamp,
    comments,
  } = post

  return (
    <article className="post">
      <PostHeader
        thumbnailUrl={thumbnailUrl}
        username={username}
      />
      <PostImage imageUrl={imageUrl} />
      <PostMeta
        likes={likes}
        comments={comments}
        timestamp={timestamp}
      />
    </article>
  )  
}

export default PostContainer
