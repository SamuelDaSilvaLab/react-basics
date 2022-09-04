import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/**
 * Componente único padrão usado para controlar
 * a renderização de toda a aplicação
 */
import App from "./App";

/**
 * O elemento root é único: <div id="root"></div>
 */
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

/**
 * O método render é o responsável por
 */
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/**
 * Menor exemplo de React
 *
 * Basta usar o método render do objeto ReactDOM e passar
 * o componente <App /> e passar o elemento raíz
 *
 *  */
/*

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

*/

/**
 * A estrutura a cima é a mais básica do React, onde eu escolho
 * um único elemento como raíz e a partir dele eu controlo meus
 * componentes.
 */
