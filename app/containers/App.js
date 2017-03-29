// @flow
import React, { Component } from 'react';
import type { Children } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { initializeFirebase } from '../utils/Firebase';
import { SendMessage } from '../actions/message';

class App extends Component {
  props: {
    children: Children
  };

  componentWillMount() {
    initializeFirebase();
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
