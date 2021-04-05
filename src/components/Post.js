import React, { Component } from "react"
import { connect } from "react-redux"
import { deletePost } from "../actions/postAction"

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push("/")
  }

  render() {
    const { post } = this.props

    const postDetail = post ? (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={this.handleClick}>delete</button>
      </div>
    ) : (
      <h1>Not found</h1>
    )
    return <div>{postDetail}</div>
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.postId)

  return {
    post: state.posts.find(post => post.id === id),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
