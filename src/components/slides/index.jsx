import React from 'react';

import Code from '../code';
import {Slide, TitleSlide, CodeSlide, ImageSlide, CodeEditSlide, CodeEditSlide1} from '../slide-types';

const Slides = [
  <TitleSlide title='Redux in real life' subtitle='Simplicity revisited'/>,

  <CodeSlide title='About me'>
    {`const realname = 'Victor Klochikhin';
const company  = 'Trucker Path Inc.';
const role     = 'frontend_developer'
const username = '@vintlucky777';

console.log(\`Hello, world! I'm $\{username}\`);`}
  </CodeSlide>,

  <TitleSlide title="Quiz time!" subtitle="Let's play a little game" />,

  <CodeSlide title='JavaScript (1 of 2)'>
    {`a = NaN?
a = Infinity?`}
  </CodeSlide>,

  <CodeSlide title='JavaScript (1 of 2)'>
    {`a = NaN?
a = Infinity?

var _ = require('lodash');
_.isFinite(a)`}
  </CodeSlide>,

  <CodeSlide title='JavaScript (2 of 2)'>
    {`var a = 2;`}
  </CodeSlide>,

  <CodeSlide title='JavaScript (2 of 2)'>
    {`var a = 2;
(a += '2') == ?`}
  </CodeSlide>,

  <CodeSlide title='JavaScript (2 of 2)'>
    {`var a = 2;
(a += '2') == ?
(a =+ '2') == ?`}
  </CodeSlide>,

  <CodeSlide title='JavaScript (2 of 2)'>
    {`var a = 2;
(a += '2') == ?
(a =+ '2') == ?
(a +=+ '2') == ?`}
  </CodeSlide>,

  <CodeSlide title='EcmaScript 6'>
    {`const a = (x, y, z) => \`Hello, $\{x + y + z}th world!\``}
  </CodeSlide>,

  <CodeSlide title='EcmaScript 6'>
    {`const a = (x, y, z) => \`Hello, $\{x + y + z}th world!\`

> a(1,2,3) = Hello, 6th world!`}
  </CodeSlide>,

  <CodeSlide title='EcmaScript 7 (1 of 2)'>
    {`const {a, b, ...some} = {a: 1, b: 2, c: 3, d: 4}`}
  </CodeSlide>,

  <CodeSlide title='EcmaScript 7 (1 of 2)'>
    {`const {a, b, ...some} = {a: 1, b: 2, c: 3, d: 4}

> a = 1, b = 2, some = {c: 3, d: 4}`}
  </CodeSlide>,

  <CodeSlide title='EcmaScript 7 (2 of 2)'>
    {`const {a: b, c: d} = {a: 4, b: 3, c: 2, d: 1}
console.log(a, b, c, d);`}
  </CodeSlide>,

  <CodeSlide title='EcmaScript 7 (2 of 2)'>
    {`const {a: b, c: d} = {a: 4, b: 3, c: 2, d: 1}
console.log(a, b, c, d);
> undefined, 3, undefined, 1`}
  </CodeSlide>,

  <ImageSlide title='Back in the days'
              src='http://eethann.github.io/Drupal-Backbone/drupalcon-munich-backbone-slides/images/spaghetti-js.png'
              href='http://eethann.github.io/Drupal-Backbone/drupalcon-munich-backbone-slides/images/spaghetti-js.png'
              caption='BackboneJS?' />,

  <ImageSlide title='Back in the days'
              src='http://cdn.infoq.com/statics_s2_20160301-0105u1/resource/news/2014/05/facebook-mvc-flux/en/resources/flux-react-mvc.png'
              href='http://cdn.infoq.com/statics_s2_20160301-0105u1/resource/news/2014/05/facebook-mvc-flux/en/resources/flux-react-mvc.png'
              caption='MVC scales as #$*@!' />,

  <ImageSlide title={<span>Introducing: <b>Flux</b></span>}
              src='https://cask.scotch.io/2014/10/V70cSEC.png'
              href='https://cask.scotch.io/2014/10/V70cSEC.png'
              caption='The naked flux workflow' />,

  <ImageSlide title='Issues, please?'
              src='http://likethemammal.github.io/reacttalk/images/diagrams/flux-diagram.png'
              href='http://likethemammal.github.io/reacttalk/images/diagrams/flux-diagram.png'
              caption='Half way there' />,

  <CodeSlide title='The Holy Grail of UI'>
  {`(state, action) => state`}
  </CodeSlide>,

  <CodeSlide title='The Holy Grail of UI'>
    {`(state, action) => state

// Oh, my! That ^ looks like a reducer
// (accum, value) => accum`}
  </CodeSlide>,

  <CodeSlide title='What do we want?'>
    {`1) single store == single source of truth`}
  </CodeSlide>,

  <CodeSlide title='What do we want?'>
    {`1) single store == single source of truth
2) every state is unique => immutable data`}
  </CodeSlide>,

  <CodeSlide title='What do we want?'>
    {`1) single store == single source of truth
2) every state is unique => immutable data
3) no side-effects => pure functions to calc state`}
  </CodeSlide>,

  <CodeSlide title='What do we want?'>
    {`1) single store == single source of truth
2) every state is unique => immutable data
3) no side-effects => pure functions to calc state
4) listen to state changes`}
  </CodeSlide>,

  <CodeSlide title='What do we want?'>
    {`1) single store == single source of truth
2) every state is unique => immutable data
3) no side-effects => pure functions to calc state
4) listen to state changes
5) commit new actions`}
  </CodeSlide>,

  <Slide title='Welcome: Redux'>
    <p>Each action is a simple <b>JS-object</b><br/>Only restricion is a mandatory "type" field</p>
    <p>Store is a <b>tree</b> of reducers<br/>
    Reducer handles it's own branch of state<br/>
    Root element is rootReducer</p>
    <p>Each new state is a <b>new</b> object<br/>Not everything inside it is new objects, just the one's changed</p>
  </Slide>,

  <CodeSlide title='Writing Redux: reducers'>
  {`const someReducer = (action, state = defState) => {
  switch(action.type) {
    case ...:
      // construct changes obj (even with nested reducers)
      const changes = doYourMagic();
      // return new obj with prev state and changes
      return {...state, ...changes};
    default:
      return state;
  }
}`}</CodeSlide>,

  <CodeEditSlide1 title='Writing redux' defaultValue={`let's write an example...`}/>,

  <Slide title='Hacking time!'>
    <p>no, seriously, look into the sourcecode</p>
    <p>1) actions are in "/actions"</p>
    <p>2) reducers are in "/reducers"</p>
    <p>3) store is initialized in "/store"</p>
    <p>4) take a look at store.rewind() and TimeMachine</p>
  </Slide>,

  <TitleSlide title="Questions?" />,
];

export const EndSlide = <TitleSlide title='Thank you for attention!' subtitle='reach me at @vintlucky777'/>;

export default Slides;
