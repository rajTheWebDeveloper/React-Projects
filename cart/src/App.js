import logo from './logo.svg';
import './App.css';
import Cart from './Cart';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Cart/>
      </div>
    </CartProvider>
  );
}

export default App;
