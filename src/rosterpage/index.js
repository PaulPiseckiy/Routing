import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import './index.css'

import { rosterData } from '../data';

const RosterContent = ({ match }) => (
  <main className="content-text">
    <Route 
      path="/roster"
      exact={true}
      component={RosterNav}
    />
    <Route
      path={`${match.url}/:id`}
      component={RosterInfo}
    />
  </main>
)

const RosterNav = ({ match }) => (
  <ul className="roster-nav">
    <Link to={`${match.url}/Dog`}><li>Dog</li></Link>
    <Link to={`${match.url}/Cat`}><li>Cat</li></Link>
    <Link to={`${match.url}/Parrot`}><li>Parrot</li></Link>
  </ul>
)

const RosterInfo = ({ match }) => {
  const animal = rosterData.find( a => match.params.id === a.name);
  return (
    <div>
      <h1 className="roster-animal-logo">{animal.name}</h1>
      <div>Class: {animal.aclass}</div>
      <br />
      <div>{animal.description}</div>
      <br />
      <Link to="/roster" className="roster-back">Back</Link>
    </div>
  )
}

export default RosterContent;