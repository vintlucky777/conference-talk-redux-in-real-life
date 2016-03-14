import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import IndexPage from './components/index-page';
import AboutPage from './components/about-page';
import Slideshow from './components/slideshow';
import NotFoundPage from './components/not-found-page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage}/>
    <Route path="/slideshow" component={Slideshow}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
