import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { ApiPost } from '../EndPoints/Endpoint_v2';
import {
    Center,
    DivUserPass,
    Button,
    DivImgCircle,
    Img,
    Input,
    DivIcon,
    Body,
    Camps,
    Divimg,



} from "./loginformularystyled";


export const LoginFormulary = () => {

    const [Width, setWidth] = useState(10);
    const [HeightInput, setHeightInput] = useState(10);

    const [User, setUser] = useState("");
    const [Password, setPassword] = useState("");

    useEffect(() => {
        ajustarTamaño();
    }, []);

    function ajustarTamaño() {
        var panelIzquierda = document.getElementById("formulario");
        var inputs = document.getElementById("in");
        setWidth(panelIzquierda.clientWidth);
        setHeightInput(inputs.clientHeight);
    }
    const response = async (parameter, dates) => ApiPost(parameter, dates);
    const SendForm = async () => {
        const resp = await response("login/", { username: `${User}`, password: `${Password}` });
        //window.localStorage.setItem("Token", JSON.stringify(resp.data));
        console.log(resp.data);
        //const datos = {
        //    username: "admin@admin.com",
        //    password: "Episodio1"
        //}
    }


    return (
        <Center>

            <Body id="formulario">
                <DivImgCircle tam={Width} >
                    <Divimg tam={Width}>
                        <Img alt="user" src={"http://pm1.narvii.com/6461/fc8bad9a7ae10e9b4f5026c973d98e5d762f8e11_00.jpg"} />
                    </Divimg>
                </DivImgCircle>
                <Camps>
                    <DivUserPass id="in">
                        <DivIcon hei={HeightInput}>
                            <FontAwesomeIcon size="2x" icon={faUser} />
                        </DivIcon>
                        <Input
                            onChange={(e) => setUser(e.target.value)}
                            placeholder="User Name"
                            hei={HeightInput}
                        />
                    </DivUserPass>
                    <DivUserPass>
                        <DivIcon hei={HeightInput}>
                            <FontAwesomeIcon size="2x" icon={faKey} />
                        </DivIcon>
                        <Input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            hei={HeightInput}
                            placeholder="Password"
                        />
                    </DivUserPass>
                    <Button
                        onClick={SendForm}
                        hei={HeightInput}>
                        Login
                    </Button>
                </Camps>
            </Body>
            {console.log(User, Password)}
        </Center>
    )
}
