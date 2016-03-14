import React from 'react';
import _ from 'lodash';

import {connect} from 'react-redux';

import Code from './code';
import {editText1} from '../actions/presentation';
import store from '../store';

import styles from './slide-types.css';

export const Slide = (props) => (
  <div className={styles.slide}>
    <div className={styles.slideTitle}>{props.title}</div>
    <div className={styles.slideContent}>
      {props.children}
    </div>
  </div>
);

export const TitleSlide = (props) => (
  <div className={styles.titleSlide}>
    <div className={styles.titleSlideTitle}>{props.title}</div>
    <div className={styles.titleSlideSubtitle}>{props.subtitle}</div>
  </div>
);

export const CodeSlide = (props) => (
  <Slide title={props.title}>
    <Code>
      {props.children}
    </Code>
  </Slide>
);

export const ImageSlide = (props) => (
  <Slide title={props.title}>
    <div className={styles.slideImageWrp}>
      <img src={props.src} className={styles.slideImage}/>
    </div>
    {props.href && <div className={styles.slideImageHref}>{props.href}</div>}
    {props.caption && <div className={styles.slideImageCaption}>{props.caption}</div>}
  </Slide>
);

export class CodeEditSlide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.defaultValue,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({text: nextProps.text});
  }

  updateInput(text) {
    this.setState({text});
    this.props.onUpdate(text);
  }

  render() {
    const {title, defaultValue} = this.props;
    const {text} = this.state;

    return (
      <Slide title={title}>
        <textarea className={styles.slideTextEdit}
                  value={text}
                  onChange={e => this.updateInput(e.target.value)} />
      </Slide>
    );
  }
}
CodeEditSlide.componentWillUpdate = (nextProps, nextState) => {
  nextState.text = nextProps.text;
};


const updateCode1Trottled = _.throttle(text => store.dispatch(editText1(text)), 500);
const updateCode1Debounced = _.debounce(text => store.dispatch(editText1(text)), 500);
const updateCode1 = text => updateCode1Trottled(text);

export const CodeEditSlide1 = connect(
  ({presentation}) => ({text: presentation.text1}),
  (dispatch) => ({onUpdate: (text) => updateCode1(text)})
)(CodeEditSlide);
