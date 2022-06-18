import Principal from "./Components/Nav/Principal";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="nav1" className="App">
      <Principal/>
      <Outlet/>
    </div>
  );
}

export default App;