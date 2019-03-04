// reducer takes in: 1. Action (info on what heppened) and 2. copy of current state

//when this initialy runs state is nothing so need to include state=[] 
function posts(state=[], action){
    switch(action.type){
        case 'INCREMENT_LIKES' :
        console.log('incrementing likes')
        const i = action.index; 
        return [
            ...state.slice(0,i), // before the one we are updating
            {...state[i], likes: state[i].likes+1}, // taking a copy and then setting likes to likes +1 
            ...state.slice(i+1) // after the one we are updating
        ] 
        default:
            return state; 
    }
}

export default posts; 