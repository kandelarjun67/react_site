import './App.css';
import ConvertToUpper from './components/ConvertToUpper';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      {/* navbar component  */}
      <Navbar Brand='KandelArjun' about='About' />
      <div className="container">
        <ConvertToUpper heading="" />
      </div>
    </>
  );
}

export default App;
