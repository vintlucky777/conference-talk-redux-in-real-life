import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Code from './code';

// Since this component is simple and static, there's no parent container for it.
const IndexPage = () => (
  <div>
    <h2>Hello!</h2>
    <p>
      <Link to="/slideshow">Let's begin!</Link>
    </p>
  </div>
);

export default IndexPage;
