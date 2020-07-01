import React from 'react';
import styled from 'styled-components';

const HistoryItem = (props) => (
  <Wrapper>
    <Divider />
    <ContentWrapper>
      <Title>{props.itemData.title}</Title>
      <List>
        {props.itemData.texts.map((text) => (
          <ListItem>{text}</ListItem>
        ))}
      </List>
    </ContentWrapper>
  </Wrapper>
);

export default HistoryItem;

const Wrapper = styled.div`
  display: block;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e1e1e1;
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: 4rem 0;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 4rem;
`;

const List = styled.ul`
  margin-left: 3rem;
  list-style-type: ' · ';
`;

const ListItem = styled.li`
  font-weight: 300;
`;
