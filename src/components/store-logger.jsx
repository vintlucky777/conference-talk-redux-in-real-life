import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {toggleLogger} from '../actions/presentation';

import store from '../store';

import styles from './store-logger.css';

class StoreLogger extends React.Component {
  state = {};

  shouldComponentUpdate() {
    return true;
  }

  renderItems() {
    const {log, step} = store.history;

    return _.map(log, ({action, state}, key) => (

      <div key={key} className={`${styles.item} ${(step === key) && styles.itemActive}`} onClick={() => store.rewind(key)}>
        <pre>action {key}</pre>
        <pre>{JSON.stringify(action)}</pre>
        <pre>{JSON.stringify(state)}</pre>
      </div>

    ));
  }

  render() {
    return (
      <div className={`${styles.cnt} ${!this.state.visible && styles.cntHidden}`}>
        <div className={styles.hide} onClick={() => this.setState({visible: !this.state.visible})}>+</div>
        <pre className={styles.header}>I'm a time machine! W00t! :D</pre>
        <div className={styles.items}>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => ({store: state});

export default connect(stateToProps)(StoreLogger);
