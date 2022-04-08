import React from 'react';
import Item from './Item';
import { Container, Content, List } from './styles';

const Hitoric: React.FC = () => {
  const data = ['1', '2'];

  function renderItem({ item }: any) {
    return <Item />;
  }

  return (
    <Container>
      <Content>
        <List
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </Content>
    </Container>
  );
};

export default Hitoric;
