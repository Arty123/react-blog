// Dependencies
import {combineReducers} from 'react'

// Actions
import {ADD_POST} from '../actions/index.js'

export default function reducer(state = {}, action) {
    switch (action.type) {
        case (ADD_POST):
            return { posts: [...state.posts, action.title] }
            break;
        default:
            return state;
    }
}
