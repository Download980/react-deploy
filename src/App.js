
import './App.css';
import Navbar from './components/navbar/Navbar';
import Inicio from './components/Inicio';
import Segunda from './components/Segunda';
import Tercera from './components/Tercera';
import {Route, Router} from 'react-router-dom';

function App() {
  return (

    <Router>
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/Segunda" component={Segunda} />
      <Route exact path="/Segunda" component={Tercera} />
     <h3>Probando la react App</h3>
    </div>
    </Router>

  );
}

export default App;
