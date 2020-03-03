import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import About from './components/About/About'
import Movies from "./components/Movies/Movies";
import Navigation from "./components/Navigation/Navigation";


function App() {
    return(
        <Router>
            <div>
               <Navigation/>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/movies">
                        <Movies />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
        )
}

ReactDOM.render(<App />, document.getElementById('root'));

