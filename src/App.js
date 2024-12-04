import "./App.scss";
import PC from "./Components/PC/PC";
import Mob from "./Components/Mob/Mob";

const App = () => {

  const user_agent = navigator.userAgent.toLocaleLowerCase()
  const is_pc = (user_agent.search("iphone") > -1)?false:((user_agent.search("android") > -1)?false:true)
  return <div className="App">
    {is_pc===true?
        <PC/>:<Mob/>
    }
  </div>
}
export default App;
