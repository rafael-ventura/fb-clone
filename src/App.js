import "./App.css";
import Header from "./Header";
import Stories from "./Stories";
import imgProfile from "./resources/img07.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      <div className="publishField">
        <div className="publishForm">
          <img src={imgProfile} alt="profile pic" />
          <input type="text" placeholder="No que você está pensando?" />
        </div>
      </div>
    </div>
  );
}

export default App;
