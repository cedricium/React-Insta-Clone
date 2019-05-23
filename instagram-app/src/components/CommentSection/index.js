import React from 'react'

const CommentSection = (props) => {
  const { comments } = props

  return (
    <div className="comment-list">
      {comments.map(comment => (
        <p>
          <span className="bold">{comment.username}</span>{` `}
          {comment.text}
        </p>
      ))}
    </div>
  )
}

export default CommentSection
