

var initialState={
    
}

function projectInfo(state = initialState, action){
    switch(action.type) {
        case "UPDATE_PROJECT":
            return Object.assign( action.payload );     

        default: return state;
    }
}

export default projectInfo;