import React from 'react'

const CommentSection = (props) => {
  const { comments } = props

  return (
    <div className="comment-list">
      {comments.map(comment => (
        <p>
          <strong>{comment.username}</strong>
          {comment.text}
        </p>
      ))}
    </div>
  )
}

export default CommentSection
