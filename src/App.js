import React from 'react';
import './styles/App.scss';
import { Button } from './components/Styled';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Movies from './views/Movies';
import Tv from './views/Tv';
import Search from './views/Search';
import Details from './views/Details';

function App() {

  const [menu, setMenu] = React.useState(false);

  return (
    <div className="App">
      <Router>
        <header className="header">
          <nav className="nav">
            <ul className="nav-items">
              <li><NavLink exact className="nav-item" to='/'>Home</NavLink></li>
              <li><NavLink className="nav-item" to='/movies'>Movies</NavLink></li>
              <li><NavLink className="nav-item" to='/tv'>TV</NavLink></li>
              <li><NavLink className="nav-item" to='/search'>Search</NavLink></li>
            </ul>
          </nav>
          <Button className="mobile-nav-button" onClick={() => { setMenu(!menu) }}>Menu</Button>
          <nav className="mobile-nav" style={{ display: menu ? 'block' : 'none' }} >
            <ul className="mobile-nav-items">
              <li><NavLink exact className="mobile-nav-item" to='/'>Home</NavLink></li>
              <li><NavLink className="mobile-nav-item" to='/movies'>Movies</NavLink></li>
              <li><NavLink className="mobile-nav-item" to='/tv'>TV</NavLink></li>
              <li><NavLink className="mobile-nav-item" to='/search'>Search</NavLink></li>
            </ul>
          </nav>
        </header>
        <div className="container">
          <div className="app-wrapper">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/movies' component={Movies} />
              <Route exact path='/tv' component={Tv} />
              <Route exact path='/search' component={Search} />
              <Route exact path='/details/:id' component={Details} />
            </Switch>
          </div>
        </div>
        <footer className="footer">
          <p>Created by <a href="https://instagram.com/web.snips"> @imshines </a> 😀 using <a href="https://reactjs.org"> React </a> </p>
        </footer>
      </Router>
    </div >
  );
}

export default App;
