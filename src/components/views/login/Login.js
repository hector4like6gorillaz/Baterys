import React, { useEffect, useState } from 'react';
import { LoginFormulary } from '../../loginFormulary/LoginFormulary';
import {
    Center,
    Form,
    DivImg,
    ImgBaterys,
    Body,


} from "./loginstyled"



export const Login = () => {
    const [Height, setHeight] = useState(300);
    useEffect(() => {
        var x = window.screen.width;
        var y = window.screen.height;
        setHeight(y);

    }, []);
    return (
        <Center hei={Height} >
            <Body >
                <DivImg>
                    <ImgBaterys alt="baterias" src={"https://lh3.googleusercontent.com/proxy/7Cmf88lU5y1XtaT7mu3zq6SaFwdgCHp6mJgdFzLNqWDLkygujJE94ZuJF2T1lEdBlPUklHU3hhCEo_yqlAG_7yGWL9WrsqpoEK2wPMbH5Aq9UDfto9Xq34wBp7iSvK0X"} />
                </DivImg>
                <Form>
                    <LoginFormulary />
                </Form>
            </Body>
        </Center>
    )
}
