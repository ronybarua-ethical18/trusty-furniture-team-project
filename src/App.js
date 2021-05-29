import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import ViewSingleItem from './Components/NewArrivalProducts/ViewSingleItem';
function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/cart">
              <Cart></Cart>
            </Route>
            <Route path="/products/:id">
              <ViewSingleItem></ViewSingleItem>
            </Route>
          </Switch>
     </Router>
    </div>
  );
}

export default App;
