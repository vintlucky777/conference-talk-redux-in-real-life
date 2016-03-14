import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import TimeMachine from './time-machine';

import styles from './app.css';

const App = (props) => (
  <div>
    <div className={styles.header}>
      <IndexLink to="/">Home</IndexLink> | <Link to="/slideshow">Slideshow</Link> | <Link to="/About">About</Link>
    </div>
    <TimeMachine />
    <br/>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
