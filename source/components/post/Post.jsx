// Dependencies
import React from 'react'

// Styles
import './Post.scss'

export default class Post extends React.Component {
    render() {
        return(
            <li className="posts__item">
                <div className="post__content">{this.props.content}</div>
                <div className="post__buttons-wrapper">
                    <button className="button btn-post btn-remove">remove</button>
                    <button className="button btn-post btn-edit">edit</button>
                </div>
            </li>
        )
    }
}
