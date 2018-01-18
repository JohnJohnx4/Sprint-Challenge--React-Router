import React from 'react';
import './navbar.css'

import Home from '../../components/pages/home.js';
import Mac from '../../components/pages/mac.js';
import Iphone from '../../components/pages/iphone.js';
import Ipad from '../../components/pages/ipad.js';
import Music from '../../components/pages/music.js';
import Watch from '../../components/pages/watch.js';
import Tv from '../../components/pages/tv.js';
import Support from '../../components/pages/support.js';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

function Navbar () {
    return(
        <Router>
        <div className="navbar">
            <div className="navbar__heading">This is the NavBar</div>
            <ul className="navbar__top">
                <li class="navbar__top_items">
                    <NavLink className="navbar__navlink" to="/">
                        Home
                    </NavLink>
                </li>

                <li class="navbar__top_items">
                    <NavLink className="navbar__navlink" to="/mac">
                        Mac
                    </NavLink>
                </li>

                <li class="navbar__top_items">
                    <NavLink className="navbar__navlink" to="/ipad">
                        iPad
                    </NavLink>
                </li>

                <li class="navbar__top_items">
                    <NavLink className="navbar__navlink" to="/iphone">
                        iPhone
                    </NavLink>
                </li>

                <li class="navbar__top_items">
                    <NavLink className="navbar__navlink" to="/watch">
                        Watch
                    </NavLink>
                </li>

                <li class="navbar__top_items">
                    <NavLink className="navbar__navlink" to="/tv">
                        TV
                    </NavLink>
                </li>

                <li class="navbar__top_items">
                    <NavLink className="navbar__navlink" to="/music">
                        Music
                    </NavLink>
                </li>

                <li class="navbar__top_items">
                    <NavLink className="navbar__navlink" to="/support">
                        Support
                    </NavLink>
                </li>
            </ul>

            <div>
                <Route path="/" component={Home} exact />
                <Route path="/mac" component={Mac} exact />
                <Route path="/iphone" component={Iphone} exact />
                <Route path="/ipad" component={Ipad} exact />
                <Route path="/music" component={Music} exact />
                <Route path="/watch" component={Watch} exact />
                <Route path="/tv" component={Tv} exact />
                <Route path="/support" component={Support} exact />
            </div>
        </div>
          </Router>
    );
}

export default Navbar;

/* <Route path="/" component={App} exact />
                <Route path="/" component={} />
                <Route path="/" component={} />
                <Route path="/" component={} />
                <Route path="/" component={} />
                <Route path="/" component={} />
                <Route path="/" component={} /> */