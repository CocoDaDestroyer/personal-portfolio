
import './App.css';
import Title from './Components/Title';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
function App() {
  return (
    <div className="App">
      <Header/>
      <Title/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
