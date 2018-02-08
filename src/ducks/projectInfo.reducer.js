var initialState={
    author_id: '',
    name: '',
    themeColor: '#323232',
    background: '',
    status_id: 1
}

function projectInfo(state = initialState, action){
    console.log('REDUCER HIT: Action ->', action );
    switch(action.type) {
        case "UPDATE_THEME_COLOR":
            return Object.assign( {}, state, { themeColor: action.payload } );
        default: return state;
    }
}








export default projectInfo;