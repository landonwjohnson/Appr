

var initialState = {
    verifiedUser: false
}

function authRouter(state = initialState, action){
    switch(action.type) {
        case "UPDATE_AUTH":
            return Object.assign( {}, state, { verifiedUser: action.payload });
        default: return state;
    }
}

export default authRouter;
