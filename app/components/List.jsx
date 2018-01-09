import React from 'react';
import styled from 'styled-components';
import ThumbnailModal from './ThumbnailModal.jsx';

const Container = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  border-top: .5px solid #333;
  border-bottom: .5px solid #333;
`;

const Grade = styled.ul `
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  margin: 30px 160px;
`;

export default class List extends React.Component {

  render() {
    let picturesList = this.props.user.picturesSrc.map((pic, index) => {
      return (
        <div key={index.toString()}>
          <ThumbnailModal source={pic} profilePicture={this.props.user.profilePicSrc}/>
        </div>
      )
    });
    return (
      <Container>
        <Grade>{picturesList}</Grade>
      </Container>
    );
  }
}
