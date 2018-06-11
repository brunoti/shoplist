import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Header as NBHeader, Left, Button, Body, Right, Icon, Title } from 'native-base';
import { back } from '../../services/navigator';
import { omit } from 'ramda';

const onlyHeaderProps = omit(['onPressLeft', 'onPressRight', 'leftIcon', 'rightIcon']);

const Header = props => (
  <NBHeader {...onlyHeaderProps(props)}>
    <Left>
      <Button
        onPress={props.onPressLeft || back}
        transparent>
        <Icon name={props.leftIcon || 'arrow-left'} />
      </Button>
    </Left>
    <Body>
      <Title>{props.title}</Title>
    </Body>
    {
      props.onPressRight && props.rightIcon 
        ? (
          <Right>
            <Button
              onPress={props.onPressRight || back}
              transparent>
              <Icon name={props.rightIcon || 'arrow-left'} />
            </Button>
          </Right>
        ) 
        : <Right />
    }
  </NBHeader>
);

Header.propTypes = {
  ...NBHeader.propTypes,
  title: PropTypes.string.isRequired
}

Header.defaultProps = {
  noShadow: true
}

export default Header;
