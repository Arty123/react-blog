// Dependencies
import React from 'react'
import Posts from '../posts/Posts.jsx'

// Styles
import './Content.scss'

export default class Content extends React.Component {
    constructor() {
        super();
        this.addPostAction = this.addPostAction.bind(this);
        this.removePostAction = this.removePostAction.bind(this);
        this.state = {
            posts: ['Post 1', 'Post 2', 'Post 3', 'Post 4'],
        };
    }

    addPostAction() {
        return this.setState(() => {
            return { posts: [...this.state.posts, this.refs.postInput.value] }
        })
    }

    removePostAction(e, data) {
        console.log('removeHandler');
    }

    render() {
        return(
            <section className="content">
                <h1>Welcome to my blog!</h1>
                <div className="new-post__wrapper">
                    <input ref="postInput" type="text" placeholder="Add new post"/>
                    <button onClick={this.addPostAction} className="button">Add</button>
                </div>
                <Posts removeHandler={this.removePostAction} postsCount={this.state.posts.length} posts={this.state.posts} />
                <button className="button">Load more</button>
            </section>
        )
    }
}
