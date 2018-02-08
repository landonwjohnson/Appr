var theme={
    color: '#616161'
}

function themeReducer(state = theme, action){
    console.log('REDUCER HIT: Action ->', action );
    switch(action.type) {
        case "UPDATE_THEME_COLOR":
            return Object.assign( {}, state, { color: action.payload } );
        default: return state;
    }
}








export default themeReducer;