import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import './App.css';

import HomeContent from './homepage';
import RosterContent from './rosterpage';
import { Notification as RedirectContent } from './redirectpage';
import { routes, links } from './data';

const MainPage = ({ backgroundColor, headline, text, match }) => (
  <div style={{ width: "100%", height: "350px", backgroundColor}}>
    <header className="content-header">{headline}</header>
  </div>
)

const App = () => (
  <Router>
    <div>
      <nav className="main-nav">
        {links.map((link, id) => (
          <NavLink 
            key={id}
            to={link.to}
            exact={link.exact} 
            style={link.style}
            activeStyle={link.activeStyle}
          >{link.name}</NavLink>
        ))}
      </nav>

      <header>
        {routes.map((route, id) => (
          <Route 
            key={id}
            path={route.path}
            exact={route.exact} 
            component={()=>
              <MainPage 
                backgroundColor={route.backgroundColor} 
                headline={route.headline}
            />}
        />))}
      </header>

      <main>
        <Route
          path="/"
          exact={true}
          component={HomeContent}
        />
        <Route 
          path="/roster"
          component={RosterContent}
        />
        <Route 
          path="/redirect"
          component={RedirectContent}
        />
      </main>
    </div>
  </Router>
)

export default App;