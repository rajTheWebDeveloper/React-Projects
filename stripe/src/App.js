import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import Hero from './Hero';
import { StripeProvider } from './StripeContext';

function App() {
  return (
    <StripeProvider>
      <div className="App">
        <Navbar/>
        <Hero/>
        <Sidebar/>
        <Submenu/>
      </div>
    </StripeProvider>
  );
}

export default App;
