import Principal from "./Components/Nav/Principal";
import Carrucel from "./Components/Views/Carrucel";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="nav1" className="App">
      <Principal />
      <Carrucel />
      <Outlet />
    </div>
  );
}

export default App;