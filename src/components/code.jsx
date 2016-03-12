import React, {PropTypes} from 'react';
import hl from 'highlight.js';

import styles from './code.css';

export default class Code extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    lang: PropTypes.string,
  }

  componentDidMount() {
    hl.highlightBlock(this.refs.code);
  }

  componentDidUpdate() {
    hl.highlightBlock(this.refs.code);
  }

  render() {
    return (
      <pre className={styles.cnt}>
        <code ref="code" className={this.props.lang}>
          {this.props.children}
        </code>
      </pre>
    );
  }
}
