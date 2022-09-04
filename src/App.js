import "./styles.css";
import Basics from "./pages/Basics";

/**
 * Estrutura básica de pastas
 *
 * O básico é ter duas pastas na raíz:
 * projeto/
 *  /public
 *  /src
 *    App.js
 *    index.js
 *
 * Essa é a estrutura básica, todos os arquivos e componentes
 * devem estar dentro da pasta /src, no App não podem haver
 * ../pasta, isso é gamb e vai causar erros
 */

/**
 * O componente App é responsável por controlar as
 * configurações e comportamentos gerais da aplicação
 *
 */
export default function App() {
  return (
    <div className="App">
      <Basics />
    </div>
  );
}
