import React from 'react';
import styled from 'styled-components';

const LinkItem = (props) => (
  <Wrapper href={`https://${props.itemData.link}`}>
    <Icon src={props.itemData.icon} />
    <Text>{props.itemData.title}</Text>
    <Text>{props.itemData.link}</Text>
  </Wrapper>
);

const height = '4rem';

const Wrapper = styled.a`
  margin: 0.8rem 0;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: ${height} auto;
  column-gap: 1rem;
  align-items: center;
`;

const Icon = styled.img`
  width: ${height};
  height: ${height};
  grid-row: 1 / span 2;
`;

const Text = styled.p`
  margin: 0;
  vertical-align: middle;
  font-size: 1rem;
`;

export default LinkItem;
