import { createStore, compose } from 'redux'; 
import { syncHistoryWithStore } from 'react-router-redux'; // allows router to work with redux
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index'; 

// default data to work with WB using a data file COULD PULL THIS FROM API if I wanted

import comments from './data/comments';
import posts from './data/posts';

// create and obj for default data
const defaultState = {
    posts, 
    comments
};

//THIS ALLOWS DEV TOOLS TO WORK 
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

// store needs rootReducer we just imported and the defaultState to work
const store = createStore(rootReducer, defaultState, enhancers);

// as we navigate the site, we weave store and use it in reduxtagram.js so we export it
export const history = syncHistoryWithStore(browserHistory, store);

// this will allow for hot reloads on the reducers
// if(module.hot){
//     module.hot.accept('./reducers/', ()=> {
//         const nextRootReducer = require('./reducers.index').default;
//         store.replaceReducer(nextRootReducer); 
//     })

// }

export default store; 