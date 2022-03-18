import React, {useState} from "react";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyled } from "./Components/GlobalStyled.js"
import {ThemeProvider} from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/Temas.js"
import SwitcherTheme from "./Components/SwitcherTheme/index"
import { BtnTema } from "./Components/UI";




function App() {

  const [tema, setTema] = useState(true);


   const toggleTema = () => {
    setTema((tema) => !tema )
}



  return (
    <>
    <ThemeProvider theme={tema ? temaClaro : temaEscuro} >
        <GlobalStyled/>
        <BtnTema onClick={toggleTema} >
          <SwitcherTheme tema={tema} />
        </BtnTema>
        <Cabecalho />
        <Container />
    </ThemeProvider>
    </>
  );
}

export default App;
