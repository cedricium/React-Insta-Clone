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

const CommentForm = (props) => {
  const { comment, addNewComment, handleChange } = props
  return (
    <form onSubmit={addNewComment}>
      <input
        type="text"
        name="comment"
        placeholder="Add a comment…"
        value={comment}
        onChange={handleChange}
      />
    </form>
  )
}

class CommentSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      comments: [],
    }
    this.addNewComment = this.addNewComment.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
    })
  }

  addNewComment(event, index) {
    event.preventDefault()
    const newComment = {
      username: 'cedricium',
      text: this.state.comment,
    }
    const newComments = this.state.comments.slice()
    newComments.push(newComment)
    this.setState({
      comment: '',
      comments: newComments,
    })
  }

  handleChange(event) {
    this.setState({
      comment: event.target.value,
    })
  }

  render() {
    return (
      <div className="comment-list">
        {this.state.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <CommentForm
          comment={this.state.comment}
          addNewComment={this.addNewComment}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
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
