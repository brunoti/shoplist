import React, { Component } from 'react';
import { Container, Text, Row, Button } from 'native-base';

class InitialScreen extends Component {
  render() {
    return (
      <Container padder>
        <Row size={70} />
        <Row size={15}>
          <Col>
            <Button block>
              <Text>
                Primeiro acesso
              </Text>
            </Button>
          </Col>
        </Row>
        <Row size={15}>
          <Col>
            <Button block bordered>
              <Text>
                Já tenho uma conta
              </Text>
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default InitialScreen;
