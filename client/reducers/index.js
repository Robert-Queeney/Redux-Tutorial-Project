import { combineReducers } from 'redux'; 
import { routerReducer } from 'react-router-redux'; 
import posts from './posts'; 
import comments from './comments';

// need to bring in router becasue the URL will change for each post and need to account for that
const rootReducer = combineReducers({posts, comments, routing: routerReducer})

export default rootReducer; 