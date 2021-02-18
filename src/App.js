import './App.css';
import Header from "./Components/header";
import Home from "./Components/home";
import Stacks from "./Components/Stacks";
import Projects from "./Components/Projects";


function App() {
  return (
    <main id="main-content">
      <Header />
      <Home />
      <Stacks />
      <Projects />
    </main>
  );
}

export default App;
