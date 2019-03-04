import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

//this will map whatever is in that state to "this.props.posts or comments"
function mapStateToProps(state){
    return{
        posts: state.posts, 
        comments: state.comments
    }
}

// passes the action creators (increment like, add or delete comment) as props  
function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}

// this will surface the data an components as props
// immediately call it against main to take Main component and add all the props and data
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App; 