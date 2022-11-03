import "./App.css";
import Home from "./pages/Home";
import MenuFullScreen from "./components/menu/MenuFullScreen";
import { useCurrentWindowDimensions } from "./hooks/viewport";

function App({ isMobile }) {
  const { width, height } = useCurrentWindowDimensions(isMobile);
  return (
    <div className="App">
      <MenuFullScreen availableWidth={width} availableHeight={height} />
      <Home availableWidth={width} availableHeight={height}></Home>
    </div>
  );
}

export default App;
