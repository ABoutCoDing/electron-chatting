// @flow
import React, { Component } from 'react';

import { Text, TextInput, View, Button } from 'react-desktop/macOs';

export default class Home extends Component {
  handleChange = e => console.log(e.target.value);

  render() {
    return (
        <div>
          <View
            className="chat-container"
            layout="vertical"
            horizontalAlignment="center"
          >
            <Text className="chat other">
              다른 사람
            </Text>

            <Text className="chat me">
              나
            </Text>
            <Text className="chat me">
              나
            </Text>
            <Text className="chat me">
              나
            </Text>
            <Text className="chat me">
              나
            </Text>
            <Text className="chat me">
              나
            </Text>
            <Text className="chat other">
              다른 사람
            </Text>
            <Text className="chat other">
              다른 사람
            </Text>
            <Text className="chat other">
              다른 사람
            </Text>
            <Text className="chat other">
              다른 사람
            </Text>
            <Text className="chat other">
              다른 사람
            </Text>
            <Text className="chat other">
              다른 사람
            </Text>
            <Text className="chat other">
              다른 사람
            </Text>
            <Text className="chat other">
              다른 사람
            </Text>
            <Text className="chat other">
              다른 사람
            </Text>
            <Text className="chat other">
              다른 사람
            </Text>
            <Text className="chat other">
              다른 사람
            </Text>
            <Text className="chat other">
              다른 사람의 기이이인 기인 LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONGLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONGLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONGLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG TEXXXXXXXXXXXXXXXXXXT
            </Text>
          </View>
          <View
            layout="horizontal"
            horizontalAlignment="center"
          >
            <TextInput
              placeholder="Text to type..."
              defaultValue=""
              onChange={this.handleChange}
              onEnter={() => console.warn('Enter!!')}
              width="72.5%"
            />
            <Button color="blue"
            onClick={() => console.log('Clicked!')}
            style={{
              width: '25%'
            }}>
          전송
            </Button>
          </View>
        </div>
    );
  }
}
