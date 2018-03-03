import styled from 'styled-components';

let DashItemContainer = styled.li `
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        height: 100px;
        border-radius: 5px;
        background: #444;
        background-size: 100%;
        background-position: 50%;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        
        &:hover{
        .project-thumb-footer{
            height: 55px;
            transition: 0.2s ease-in-out;

            label{
            font-size: 105%;
            transition: 0.2s ease-in-out;
            }
        }
        }
        &:active{
        .project-thumb-body{
            background: rgba(37, 37, 37, 0.8);
            transition: 0.2s ease-in-out;
        }

        .project-thumb-footer{
            background: rgba(37, 37, 37, 1);
            transition: 0.2s ease-in-out;
        }
        }
    }

    &:hover{
        background-size: 105%;
    }
`

let DashItemFrame = styled.div `
    width: 100%;
    height: calc(100px - 40px);
    z-index: 0.1; 
    position: absolute;
    overflow: hidden;
`
let DashItemBlurOverlay = styled.div `
    top: -10px;
    width: 103%;
    height: 103%;
    filter: blur(7px);
    // background-size: cover;
    // background-repeat: no-repeat;
    z-index: 0; 
    background: ${propsie => propsie.colorTheme || '#FFF'} url("${propsie => propsie.backgroundImage}") 50%/cover no-repeat;
    position: absolute;
    overflow: none;
    transition: 0.3s ease-in-out;
`
export {
    DashItemContainer,
    DashItemFrame,
    DashItemBlurOverlay
}
