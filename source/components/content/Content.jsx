// Dependencies
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Posts from '../posts/Posts.jsx'

// Actions
import addPostAction from '../../actions/addPostAction'

// Styles
import './Content.scss'

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

function mapDisptachToProps(dispatch) {
    return {
        addPost: bindActionCreators(addPostAction, dispatch)
    }
}

class Content extends React.Component {
    constructor() {
        super();
        this.addPostAction = this.addPostAction.bind(this);
        this.removePostAction = this.removePostAction.bind(this);
    }

    addPostAction() {
        this.props.addPost(this.refs.postInput.value);
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
                <Posts postsCount={this.props.posts.length} posts={this.props.posts} />
                <button className="button">Load more</button>
            </section>
        )
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Content)
