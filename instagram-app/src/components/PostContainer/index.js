import React from 'react'
import './index.css'

import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Heart, MessageCircle } from 'react-feather'
import CommentSection from '../CommentSection'

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

  const postedTime = dayjs(timestamp, 'MMMM Do YYYY, hh:mm:ss a')
  const postedTimeFromNow = postedTime.fromNow()

  return (
    <footer className="post-footer">
      <div className="meta">
        <Heart className="icon" size="28" strokeWidth="1" />
        <MessageCircle className="icon" size="28" strokeWidth="1" />
        <p><span className="bold">{likes} likes</span></p>
      </div>
      <CommentSection comments={comments} />
      <div className="timestamp">
        <small>{postedTimeFromNow}</small>
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
