import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import StoreLogger from './store-logger';

import styles from './app.css';

const App = (props) => (
  <div>
    <div className={styles.header}>
      <IndexLink to="/">Home</IndexLink> | <Link to="/slideshow">Slideshow</Link> | <Link to="/About">About</Link>
    </div>
    <StoreLogger />
    <br/>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
