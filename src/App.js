import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
    
        <Navbar title="TestUtils" about="About Us" />
        {/* <TextForm heading="Paste your text here ..." /> */}
        <About />
    </>
  );
}

export default App;
