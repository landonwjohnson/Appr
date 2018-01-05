import styled from 'styled-components';

let ProjectBodyContainer = styled.div `
display: flex;
`

let OverlayFrame = styled.div `
width: 100%;
height: calc(100vh - 50px);
filter: blur(7px);
background-size: cover;
background-repeat: no-repeat;
z-index: 0; 
background-image: url('${propsie => propsie.backgroundProp}');
background-position: 50% 50%;
position: absolute;
overflow: none;
transition: 0.3s ease-in-out;
`
let BlurOverlay = styled.div `
    width: 100%;
    height: calc(100vh - 50px);
    filter: blur(7px);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0; 
    background-image: url('${propsie => propsie.backgroundProp}');
    background-position: 50% 50%;
    position: absolute;
    overflow: none;
    transition: 0.3s ease-in-out;
`
export {
    ProjectBodyContainer,
    OverlayFrame,
    BlurOverlay
}
