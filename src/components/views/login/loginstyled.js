import styled from "styled-components";
const RotateAngle = 15;
export const Center = styled.div`
height: ${props => props.hei * .9}px;
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background: -prefix-linear-gradient(top, blue, white);
background: linear-gradient(to bottom, blue, white);


`
export const Body = styled.div`
height: 75%;
display:grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: 1fr;
grid-template-areas: "img form";
border-style:solid;
border-radius: 55px;
background: #263BFA;
overflow: hidden;
position: relative;
`
export const Form = styled.div`
grid-area: form;
align-self: center;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
height: 70%;

`
export const DivImg = styled.div`
grid-area: img;
align-self: center;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
height: 125%;
width: 100%;

background: red;
transform: rotate(${RotateAngle}deg);
background: linear-gradient(to bottom, blue, orange);
`

export const ImgBaterys = styled.img`
transform: rotate(-${RotateAngle}deg);
`
