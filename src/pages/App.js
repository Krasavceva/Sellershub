import "../styles/App.scss";

// import Main from "../pages/main";
import Aside_left from "../pages/aside_left";
import Aside_right from "../pages/Aside_right";
import One from "../components/main/one/One";
import Two from "../components/main/two/two";

function App() {
  return (
    <div className="App">
      <One />
      <Two />
      <Aside_left />
      {/* <Main /> */}
      <Aside_right />
    </div>
  );
}

export default App;
