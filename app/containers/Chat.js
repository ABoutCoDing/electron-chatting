// @flow
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Window, TitleBar, Text, TextInput, View, Button } from 'react-desktop/macOs';
import { remote } from 'electron';

import { userId, DB } from '../utils/Firebase';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFullscreen: false
    };
  }

  // 엔터 치는 경우 & 버튼 눌린 경우 모두 체크
  sendMessage = e => {
    if (e.target.value) {
      console.dir(e.target);
      let data = {
        msgId: +Date.now(),
        msg: e.target.value,
        userId,
        ua: navigator.userAgent
      };
      DB.ref(`messages/${ Date.now()}`).set(data);
      e.target.value = '';
    } else {
      if (e.target.nodeName.toUpperCase() === 'BUTTON') {
        if (e.target.parentNode.querySelector('input').value) {
          let data = {
            msgId: +Date.now(),
            msg: e.target.parentNode.querySelector('input').value,
            userId,
            ua: navigator.userAgent
          };
          DB.ref(`messages/${ Date.now()}`).set(data);

          e.target.parentNode.querySelector('input').value = '';
        }
      }
    }
  };

  renderText = () => {
    console.log('Hello?');

    return this.props.message.map( data => {
      if (data.userId === userId) {
        return (
          <Text key={ data.msgId } className="chat me">
            { data.msg }
          </Text>
        )
      } else {
        return (
          <Text key={ data.msgId } className="chat other">
            { data.msg }
          </Text>
        );
      }
    });
  };

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

        <div>
          <View
            className="chat-container"
            layout="vertical"
            horizontalAlignment="center"
          >
            { this.renderText() }
          </View>
          <View
            layout="horizontal"
            horizontalAlignment="center"
          >
            <TextInput
              placeholder="Text to type..."
              defaultValue=""
              onEnter={this.sendMessage}
              width="72.5%"
            />
            <Button color="blue"
              type="submit"
              onClick={this.sendMessage}
              style={{
                width: '25%'
            }}>
              전송
            </Button>
          </View>
        </div>
      </Window>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message
  };
}

export default connect(mapStateToProps)(Chat);
