import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class Home extends Component {
  render() {
    const { posts } = this.props

    const postsList = posts.length ? (
      posts.map(post => {
        return (
          <div key={post.id}>
            <h3>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h3>
          </div>
        )
      })
    ) : (
      <h1>No posts yet</h1>
    )

    return (
      <>
        <h1>Home</h1>
        <p>This is home page</p>
        {postsList}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(Home)
