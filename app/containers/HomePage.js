// @flow
import React, { Component } from 'react';
import Home from '../components/Home';

import { Window, TitleBar, Text } from 'react-desktop/macOs';
import { remote } from 'electron';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFullscreen: false
    };
  }

  render() {
    return (
      <Window
        chrome
        height="100vh"
        padding="0"
        verticalAlignment="center"
        horizontalAlignment="center"
      >
        <TitleBar
          title="일렉트론으로 개발 시작하기"
          controls
          inset
          isFullscreen={this.state.isFullscreen}
          onCloseClick={() => remote.getCurrentWindow().close()}
          onMinimizeClick={() => remote.getCurrentWindow().minimize()}
          onResizeClick={() => {
            this.setState({ isFullscreen: !this.state.isFullscreen });
            this.state.isFullscreen ? remote.getCurrentWindow().unmaximize()  : remote.getCurrentWindow().maximize()
          }}
        />
        <Home />
      </Window>
    );
  }
}
