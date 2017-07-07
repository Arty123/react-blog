// Dependencies
import React from 'react'
import Posts from '../posts/Posts.jsx'

// Styles
import './Content.scss'

export default class Content extends React.Component {
    render() {
        return(
            <section className="content">
                <h1>Welcome to my blog!</h1>
                <div className="new-post__wrapper">
                    <input type="text" placeholder="Add new post"/>
                    <button className="button">Add</button>
                </div>
                <Posts />
                <button className="button">Load more</button>
            </section>
        )
    }
}