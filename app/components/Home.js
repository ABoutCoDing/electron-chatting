// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

import { Text } from 'react-desktop/macOs';

export default class Home extends Component {
  render() {
    return (
        <div>
          <Text>Hello, 세상!!</Text>
        </div>
    );
  }
}
