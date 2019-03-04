// let's go!
import React from 'react'; 

import { render } from 'react-dom'; 

// import css
import CSS from './styles/style.styl'; 

// import components
import App from './components/app';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router deps
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
// {} for history b/c it is a named import
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
            {/* Main will always be used, and we nest the other pages within it */}
            {/* Depending on what comes after the "/" will determine which child to pass */}
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
    // Browserhistory allows us to push state & change urls w/o reloading page
    // will eventually be replaced by redux

)

render(router, document.getElementById('root'));

