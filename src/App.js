import "./App.css";
import Header from "./Header";
import Stories from "./Stories";
import Publish from "./Publish";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <Stories />
        <Publish />
      </div>
    </div>
  );
}

export default App;
