import logo from './logo.svg';
import './App.css';
import { SMProvider } from './SMContext';
import ControlCenter from './ControlCenter';
import Sidebar from './Sidebar';
import Modal from './Modal';

function App() {
  return (
    <SMProvider>
      <div className="App">
        <ControlCenter/>
        <Sidebar/>
        <Modal/>
      </div>
    </SMProvider>
  );
}

export default App;
