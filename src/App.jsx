import "./App.css";
import Pokedex from "./components/Pokedex/Pokedex";
import CustomRoutes from "./Routes/CustomRoutes";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="outer-pokedex">
        <h1 id="pokedex-heading">
          {/* //clicking on Pokedex will let us get to
          url "/" */}
          <Link to="/">Pokedex</Link>
        </h1>
        <CustomRoutes />
      </div>
    </>
  );
}

export default App;
