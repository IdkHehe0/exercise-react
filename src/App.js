import './App.css';
import Navigation from './Components/Navigation';
import Players from './Components/Players';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Players />
      {/* <Main /> */}
      <Footer />
    </div>
  )
}

export default App;
