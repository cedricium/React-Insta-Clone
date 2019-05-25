import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Comment = (props) => {
  const { comment } = props
  return (
    <p>
      <span className="bold">{comment.username}</span>{` `}
      {comment.text}
    </p>
  )
}

const CommentForm = () => {
  return (
    <form onSubmit={null}>
      <input
        placeholder="Add a comment…"
        name="comment"
        onChange={null}
      />
    </form>
  )
}

const CommentSection = (props) => {
  const { comments } = props

  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
      <CommentForm />
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  })
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection
