/**
 * Elementos são os menores blocos de construção em React
 * e descrevem o que será exibido na tela, elementos são
 * diferentes de componentes, elementos são mais simples
 * e compoẽm os componentes
 *
 * Diferente de elementos DOM do navegador,
 * elementos React são objetos simples e utilizam
 * menos recursos.
 *
 * O React DOM é o responsável por atualizar o DOM
 * para exibir os elementos React.
 */

/**
 * Atualizando elementos
 *
 * Elementos são imutáveis, uma vez criados não podem ser
 * modificados a menos que se crie um um outro elemento
 * semelhante com as alterações desejadas
 */
// Essa implementação não é interessante de fazer
// a utilização do createRoot é obrigatória, não é
// correto usar o render diretamente vinculado ao ReactDOM
/*
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById("root"));
  }
*/
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Por mais que eu esteja passando todo o componente
 * para o método render, o React atualiza apenas o necessário
 */
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

export default function RendElements() {
  return (
    <>
      <h1>Renderizando Elementos</h1>
      {setInterval(tick, 1000)}
    </>
  );
}
