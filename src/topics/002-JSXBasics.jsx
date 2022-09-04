import React from "react";
import styled from "styled-components";

const sayMyName = (name) => {
  return name;
};

const user = {
  name: "Samuel",
  age: 22,
  email: "samuel@com.br"
};

const element = <h1>Simple Element</h1>;

/**
 * Estilização simples usando styled-components
 */
const StyledP = styled.p`
  color: red;
  font-size: 24px;
`;

/**
 * Quando temos tags aninhada é interessante colocar entre
 * parenteses para melhorar a visualização e evitar a inserção
 * automática de ;
 */
const elementWithRoot = (
  <div>
    <h1>Element with root</h1>
  </div>
);

const SimpleComponent = () => {
  return (
    <>
      <h1>Simple Component</h1>
    </>
  );
};

const SimpleComponentWithChildren = ({ children }) => {
  return <>{children}</>;
};

/**
 * SOBRE JSX
 *
 * É uma extensão da sintaxe do JS usada no React
 * para realizar diversão operações na interface, pode
 * parecer HTML mas não, o JSX "cria" elementos
 *
 * Serve para ajuntar a renderização com a lógica
 * posso usar o JS em conjunto com a marcação para
 * implementar componentes dinâmicos de uma maneira mais
 * clara
 *
 * Seu uso não é obrigatório mas ajuda a exibir mensagens
 * de erro
 *
 * O JSX aceita qualquer expressão JS válida, desde que
 * esteja entre chaves {}
 *
 * O JSX também é uma expressão, depois da compilação se
 * transformam em funções normais que retornam objetos, isso
 * significa que expressões podem ser usadas como variáveis
 * comuns no código
 *
 * Nomes de atributos são escritos em camelCase como:
 * - className
 * - onClick
 * - onLoad
 * - etc...
 *
 * O JSX previne ataques de injeção pois converte tudo para
 * string antes de renderizar, é aconselhavel renderizar
 * entradas inseridas por usuários usando o JSX
 *
 * O JSX representa objetos, todo JSX faz uma chamada
 * a React.createElement
 */

/**
 * Essas duas maneiras de se criar um elemento são equivalentes
 * o JSX ao compilar é transformado em JS através do métodos
 * createElement, isso retorna um objeto que podemos chamar
 * de "elemento react" que traz informações sobre o que
 * deve ser renderizado na tela
 *
 */
/*
Ex.:
Nota: esta estrutura está simplificada
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
*/

const element2 = <h1 className="greeting">Hello, world! JSX element</h1>;
const element3 = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world! Create Element"
);

export default function JSXBasics() {
  return (
    <>
      <p>{2 + 2}</p>
      <p className="teste">{sayMyName("Samuel")}</p>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.email}</p>
      <p>{element}</p>
      <p>{element2}</p>
      <p>{element3}</p>
      <p>{elementWithRoot}</p>
      <SimpleComponent />
      <SimpleComponentWithChildren>
        <h1>Teste</h1>
      </SimpleComponentWithChildren>
      <StyledP>Styled Component</StyledP>
    </>
  );
}
