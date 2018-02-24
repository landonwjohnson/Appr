

var initialState={
    projects = []
}

function dashboardInfo(state = initialState, action){
console.log('REDUCER HIT: Action ->', action );
    switch(action.type) {
        case "UPDATE_PROJECTS":
            return Object.assign( {}, state, { projects: action.payload });     

        default: return state;
    }
}

export default dashboardInfo;
