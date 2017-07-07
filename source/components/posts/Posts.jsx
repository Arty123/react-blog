// Dependencies
import React from 'react'

// Styles
import './Posts.scss'

export default class Posts extends React.Component {
    render() {
        return(
            <div className="posts-wrapper">
                <h3 className="posts-title">Recent posts:</h3>
                <ul className="posts">
                    <li className="posts__item">
                        Post 1
                    </li>
                    <li className="posts__item">
                        Post 2
                    </li>
                    <li className="posts__item">
                        Post 3
                    </li>
                    <li className="posts__item">
                        Post 4
                    </li>
                </ul>
            </div>
        )
    }
}