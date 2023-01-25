import "../styles/App.scss";

import Main from "../components/start/Start";
import Aside_left from "../pages/aside_left";
import Aside_right from "../pages/Aside_right";

function App() {
  return (
    <div className="App">
      <Aside_left />
      <Main />
      <Aside_right />
    </div>
  );
}

export default App;
