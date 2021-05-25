import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header />
        <Switch>   
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
        <Footer />
    </Router>
    );
  }

  export default App;
