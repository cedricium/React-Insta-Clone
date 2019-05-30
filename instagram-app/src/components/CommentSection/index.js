import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

import { saveToLocalStorage, fetchFromLocalStorage } from '../../utils/localStorage'

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
      username: JSON.parse(localStorage.getItem('auth')).username,
    }
    this.addNewComment = this.addNewComment.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.saveData = this.saveData.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    window.addEventListener('load', this.fetchData)
    window.addEventListener('unload', this.saveData)
  }

  componentWillUnmount() {
    window.addEventListener('load', this.fetchData)
    window.addEventListener('unload', this.saveData)
  }

  saveData() {
    saveToLocalStorage(this.props.id, this.state.comments)
  }

  fetchData() {
    const persistedData = fetchFromLocalStorage(this.props.id)
    if (persistedData !== null) {
      this.setState({
        comments: persistedData
      })
    } else {
      this.setState({
        comments: this.props.comments
      })
    }
  }

  addNewComment(event, index) {
    event.preventDefault()
    const newComment = {
      username: this.state.username,
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
