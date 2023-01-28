import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    
        <Navbar title="TestUtils" about="About Us" />
        <TextForm heading="Paste your text here ..." />
    </>
  );
}

export default App;
