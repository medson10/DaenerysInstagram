import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
`;

const FooterText = styled.h3`
  color: #FFF;
`;

export default class Footer extends React.Component {
  render () {
    return(
      <Container>
        <FooterText>Code by Medson de Oliveira Junior</FooterText>
      </Container>
    );
  }
}
