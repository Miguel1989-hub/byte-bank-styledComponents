import React from "react";
import {Box, Button} from "../../Components/UI/index";
import { extratoLista } from "../../info"
import Itens from "../Itens/index";



function Extrato() {
    return(
        <Box>

        {
            extratoLista.updates.map(({id, type, from, value, date}) => {
                return(
                    <Itens key={id} type={type} from={from} value={value} date={date} />
                )
            })
        }
        <Button>Ver mais</Button>
        </Box>
    )
}

export default Extrato;