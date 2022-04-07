import logo from './logo.svg';
import './App.css';
import JoinUs from './Day1/JoinUs';
import Download from './Day1/Download';
import Help from './Day1/Help';
import Home from './Day1/Home';
import ContactUs from './Day1/ContactUs';
import Login from './Day1/Login';
import Search from './Day1/Search';
import Settings from './Day1/Settings';

function App() {
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
        <li>Android</li>
        <li>Blackberry</li>
        <li>iPhone</li>
        <li>Windows Phone</li>
      </ul>

      <h1>Mobile Manufacturers</h1>
      <ul>
        <li>Samsung</li>
        <li>HTC</li>
        <li>Micromax</li>
        <li>Apple</li>
      </ul>
      
      <div className='buttons'>
        <JoinUs/>
        <Settings/>
        <Login/>
        <ContactUs/>
        <Search/>
        <Help/>
        <Home/>
        <Download/>
      </div>
    </div>
  );
}

export default App;
