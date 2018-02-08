const UPDATE_THEME_COLOR = "UPDATE_THEME_COLOR";

export function updateThemeColor( color ) {
    return {
        type: UPDATE_THEME_COLOR,
        payload: color
    };
}