import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {prevSlide, nextSlide} from '../actions/presentation';

import Slides, {EndSlide} from './slides/';

import styles from './slideshow.css';

let _prevKeyPress = null;

class Slideshow extends React.Component {
  componentDidMount() {
    // _prevKeyPress = document.onkeypress;
    // document.onkeypress = e => this.handleKeyPress(e.keyCode);
  }

  componentWillUnmount() {
    // document.onkeypress = _prevKeyPress;
  }

  handleKeyPress(key) {
    switch(key) {
      case 167:
        this.props.onNextSlide();
        break;

      case 177:
        this.props.onPrevSlide();
        break;

      default:
    }
  }

  render () {
    const Slide = Slides[this.props.slide];

    return (
      <div className={styles.slideshow}>
        {Slide || EndSlide}
        <div className={styles.slideshowTopic}>
          Redux in real life
        </div>
        <div className={styles.slideshowSpeaker}>
          @vintlucky777
        </div>
        <button className={styles.nextSlide} onClick={() => this.props.onNextSlide()}>Next Slide</button>
        <button className={styles.prevSlide} onClick={() => this.props.onPrevSlide()}>Prev Slide</button>
      </div>
    );
  }
}

const stateToProps = ({presentation}) => ({slide: presentation.slide});
const dispatchToProps = (dispatch) => ({
  onPrevSlide: () => dispatch(prevSlide()),
  onNextSlide: () => dispatch(nextSlide()),
});

export default connect(stateToProps, dispatchToProps)(Slideshow);
