// redux only allow for 1 reducer, so we need to put all of these into a ROOT reducer
function postComments(state = [], action){
    switch(action.type){
        case 'ADD_COMMENT':
        // return the new state with the new comment
        return [...state,{
            user: action.author, 
            text: action.comment
        }];
        case 'REMOVE_COMMENT':
        console.log('removing comment');
        // need to retutrn state without the deleted comment
        return[
            ...state.slice(0,action.i), // return state up untill our commment we want to delete
            // console.log(action.i),
            ...state.slice(action.i + 1)  //  after deleted one to the end
        ]
        default: 
            return state;
    }
    return state; 
}


function comments(state=[], action){
    if(typeof action.postId !== 'undefined') {
        return {
            ///take current state
            ...state,
            ///overwrite this with new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}
 
export default comments; 