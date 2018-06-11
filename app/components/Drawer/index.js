import React, { Component } from 'react';
import { View } from 'react-native';
import { Row, Col, Thumbnail, Icon } from 'native-base';
import PropTypes from 'prop-types';

import { Image, ImageBackground } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";

// Import Helpers
import alert from '../../functions/alert';

class Drawer extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={[ 'Home' ]}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default Drawer;
