// Dependencies
import React from 'react'

// Components
import Post from '../post/Post.jsx'

// Styles
import './Posts.scss'

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="posts-wrapper">
                <h3 className="posts-title">Recent posts: {this.props.postsCount}</h3>
                <ul className="posts">
                    {this.props.posts.map((item, id) => {
                        return <Post ref="postItem" removeHandler={this.props.removeHandler} key={id} content={item} />
                      })
                    }
                </ul>
            </div>
        )
    }
}
