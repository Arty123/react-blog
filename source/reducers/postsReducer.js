// Actions
import {ADD_POST, REMOVE_POST, EDIT_POST} from '../actions/index.js'

// Initial state
const initState = {
    posts: ['Post 1', 'Post 2', 'Post 3', 'Post 4'],
}


export default function postsReducer(state = initState, action) {
    switch (action.type) {
        case (ADD_POST):
            return { posts: [...state.posts, action.title] }
            break;
        default:
            return state;
    }
}
