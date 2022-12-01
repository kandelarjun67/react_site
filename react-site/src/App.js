import './App.css';
import AboutUs from './components/AboutUs';
// import ConvertToUpper from './components/ConvertToUpper';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      {/* navbar component  */}
      <Navbar Brand='KandelArjun' about='About' />
      <div className="container">

        {/* <ConvertToUpper heading="Enter the Text to analyze the below" textSummary="Text Summary" /> */}

        <AboutUs heading='About Us'/>
      </div>
    </>
  );
}

export default App;
