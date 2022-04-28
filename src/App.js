import './App.css';
import './shop/shop.js'

function App() {
  return (
    <div className="App">
      <div className='row'>
      <div id='logo' className='column'>
          <a href='/'>INDIGOELECTRIC</a>
        </div>
        <div>
          <a className='column' href='/shop/shop.js'>Shop</a>
          <a className='column' href='/about/about.js'>About</a>
          <a className='column' href='/contact/contact.js'>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default App;
