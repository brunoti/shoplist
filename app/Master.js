import React, { Component } from 'react';
import { Container, StyleProvider } from 'native-base';

import Router from './Router';
import Navigator from './services/navigator';

import material from './theme/variables/material';
import getTheme from './theme/components';

class Master extends Component {
  render() {
    return (
      <StyleProvicer style={getTheme(material)}>
        <Container>
          <Router ref={Navigator.setContainer} />
        </Container>
      </StyleProvicer>
    );
  }
}

export default Master;
