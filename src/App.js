import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import UseFetch from "./hooks/UseFetch";

function App() {
  return (
    <article className="container d-flex aliggn-items-center justify-content-center alto-100">
      <Formulario />
    </article>
  );
}

export default App;
