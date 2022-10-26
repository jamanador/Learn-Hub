import { useContext } from "react";
import "./App.css";
import { authContext } from "./AuthProvider/AuthProvider";
import Routes from "./Routes/Routes";

function App() {
  const { myStyle } = useContext(authContext);
  return (
    <div className="App" style={myStyle}>
      <Routes></Routes>
    </div>
  );
}

export default App;
