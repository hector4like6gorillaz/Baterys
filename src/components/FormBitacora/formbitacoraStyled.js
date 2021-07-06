import styled from "styled-components";

export const Center = styled.div`
width: 100%;
height: 500px;
display:flex;
flex-direction: column;
align-items: center;
border-style: solid;
position: relative;
`

export const Camps = styled.div`
display: flex;

`
const pro = `
border-style: solid;
width: 500px;
height: 300px;
transition: 5s;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
border-style: solid;
position: absolute;
top:35%;
left:35%;
`
const pro2 = `
width: auto;
height: auto;
transition: 5s;
`
export const DivFocus = styled.div`


${props => props.bool && pro}

`