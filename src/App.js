import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Rejestracja from './Rejestracja';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header /> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Rejestracja" component={Rejestracja} />
        </Switch> 
      </Router>
      <Footer />
    </div>
  );
}

export default App;
