import "./App.css";
import Home from "./pages/Home";
import MenuFullScreen from "./components/menu/MenuFullScreen";

function App() {
  return (
    <div className="App">
      <MenuFullScreen />
      <Home></Home>
    </div>
  );
}

export default App;
