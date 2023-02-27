
import './App.css';
import Title from './Components/Title';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Title/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
