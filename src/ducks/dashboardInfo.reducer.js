

var initialState={
    groupProjects: [],
    personalProjects: [],
}

function dashboardInfo(state = initialState, action){
console.log('REDUCER HIT: Action ->', action );
    switch(action.type) {

        case "UPDATE_PERSONAL_PROJECTS":
            return Object.assign( {}, state, { personalProjects: action.payload });

        case "UPDATE_GROUP_PROJECTS":
            return Object.assign( {}, state, { groupProjects: action.payload });


        default: return state;
    }
}

export default dashboardInfo;
