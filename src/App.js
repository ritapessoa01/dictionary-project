import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome to my dictionary</header>
      <h1>What word do you want to look up?</h1>
      <Dictionary />
      <Footer />
    </div>
  );
}

export default App;
