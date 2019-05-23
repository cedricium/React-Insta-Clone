import React from 'react'

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
        <p>{likes} likes</p>
        <i>Love</i>
        <i>Comment</i>
      </div>
      <div className="comment-list">
        {comments.map(comment => (
          <p><strong>{comment.username}</strong> {comment.text}</p>
        ))}
      </div>
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
    <div className="post">
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
    </div>
  )  
}

export default PostContainer
