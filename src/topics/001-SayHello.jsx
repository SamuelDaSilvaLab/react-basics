const sayHello = () => {
  console.log("Hello");
};

/**
 * NIVEL DE CONHECIMENTO JAVASCRIPT
 *
 * Na documentação oficial o primeiro ponto destacado é
 * a questão da necessidade de se ter um conhecimento
 * prévio das tecnologias web básicas: HTML, CSS e principalmente
 * a Javascript.
 *
 * Visto que o React é uma biblioteca feita em Javascript
 * e usada com Javascript, para usar o React e compreender
 * seu real funcionamento, seu estudo e o aprofundamento
 * em Javascript deve ser no minimo conjunto, ou seja, tenho
 * que estudar o Javascript e suas variantes (Typescript)
 * para aprofundar meus conhecimentos e habilidades com o
 * React
 */

/**
 * Todo evento em React segue o padrão camelCase
 * para poder se diferenciar dos eventos do HTML5
 *
 * O onClick deve ser uma função que chama uma função
 * para que sayHello() não seja executado no momento em
 * que carregar a página
 */
const SayHello = () => {
  return <button onClick={() => sayHello()}>Say Hello</button>;
};

/**
 * Exportação padrão quando eu tenho apenas um
 * componente para ser exportado, caso queira exportar
 * vários basta tirar o default e listar os componentes
 * em um objeto:
 *
 * export { Component1, Component2, etc... }
 */
export default SayHello;
