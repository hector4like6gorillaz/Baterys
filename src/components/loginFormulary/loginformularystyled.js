import styled from "styled-components";
const BorderRadius = 15;
const FontSize = 120;

export const Center = styled.div`
height: 80%;
width: 70%;
display: flex;
flex-direction: column-reverse;

`
export const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column-reverse;
position: relative;
align-items: center;
background-color: blue;
border-radius: ${BorderRadius}px;
background: -prefix-linear-gradient(top, white, blue);
background: linear-gradient(to right, yellow,red, Yellow);

`
export const Camps = styled.div`
height: 70%;
width: 75%;
display: flex;
flex-direction: column;
justify-content: space-around;
`
export const DivUserPass = styled.div`
display: grid;
display:grid;
grid-template-columns: .2 .8;
grid-template-areas: "img form";
border-style: solid;
border-radius: ${BorderRadius}px;
overflow: hidden;



`
export const Input = styled.input`
grid-area: form;
padding-left: 5px;
//border-top-right-radius: ${BorderRadius}px;
outline: none;
border-style: none;
font-size: ${FontSize}%;
`
export const DivIcon = styled.div`
padding:5px;
grid-area: img;
display:flex;
justify-content: space-around;
align-items: center;
background: black;
color: white;
border-style: none;
`


export const Button = styled.button`
height: 15%;
border-radius: ${BorderRadius}px;
font-size: ${FontSize}%;
`

export const DivImgCircle = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
position: absolute;
top: -${props => props.tam * .4 * .9}px;
border-style: solid;
border-color:#263BFA;
z-index: 1;
border-width: 15px;
`
export const Divimg = styled.div`
border-style: solid;
border-radius: 50%;
overflow: hidden;
width: ${props => props.tam ? props.tam * .5 : 300}px;
height: ${props => props.tam ? props.tam * .5 : 300}px;
`
export const Img = styled.img`
width: 100%;
    `