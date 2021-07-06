import React, { useEffect, useState } from 'react';
import { datos_js, datos_js2 } from "./datos"

import {
    Center,
    DivTable,
    DivOficios,

} from "./bitacorastyled";
import { SimpleTableUI_params } from '../../simpleTable/SimpleTableUI_params';
import { FormBitacora } from '../../FormBitacora/FormBitacora';


export const Bitacora = () => {


    useEffect(() => {

        //console.log(datos_js);

    }, []);

    const columnas = [
        "Asociado",
        "Num # o Agencia",
        "Horometro",
        "Bateria Entrante (E)",
        "Bateria Saliente (F)",
        "Fecha"
    ];
    
    return (
        <Center>
            <FormBitacora />

            
            <DivTable >
                
                <SimpleTableUI_params
                    bitacora={datos_js}
                    columnNames={columnas}
                    space={"_"}
                    height={270}
                />
            </DivTable>
           

        </Center>
    )
}
