import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Rejestracja from './Rejestracja';
import Search from './Search';
import Add from './Add';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {


  return (
    <div className="App">
      
      <Router>
      <Header /> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Rejestracja" component={Rejestracja} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Add" component={Add} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
