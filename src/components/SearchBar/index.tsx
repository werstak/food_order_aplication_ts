import React, { ReactElement } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

const SearchBar = (): ReactElement => {
  return (
    <Header searchBar rounded>
      <Item>
        <Icon name="ios-search"/>
        <Input placeholder="Search"/>
      </Item>
      <Button transparent>
        <Text>Search</Text>
      </Button>
    </Header>
  );
};

export default SearchBar;
