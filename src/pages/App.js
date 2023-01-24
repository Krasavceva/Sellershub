import "../styles/App.scss";

import Question from "../components/question/Question";
import Start from "../components/start/Start";
import Right_menu from "../components/right_menu/Right_menu";
import Aside_right from "../pages/Aside_right";
function App() {
  return (
    <div className="App">
      <Aside_right />
      {/* <Question />
        <Right_menu />
        <Start /> */}
    </div>
  );
}

export default App;
