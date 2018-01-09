import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';

const Container = styled.div `
  display: flex;
  flex-direction: row;
  background-color: #FFF;
  font-family: Roboto, sans-serif;
  max-height: 465px;
`;

const Thumb = styled.img `
  width: 200px;
  height: 200px;
  margin: 20px 20px;
`;

const FullImage = styled.img`
  width: 760px;
  height: 480px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserPicture = styled.img`
  border-radius: 100%;
  margin: 0px 20px 30px 0px;
  height: 70px;
  width: 70px;
`;

const UserData = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 10px 5px 30px;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #FFF;
  border-radius: 5%;
  color: #333;
  height: 30px;
  margin-top: 15px;
  border: .5px solid #ECECEC;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  margin-left: 40px;
  padding: 0 20px;
`;

const Separator = styled.div`
  height: 1px;
  background-color: #ECECEC;
  width: 400px;
  margin: 0px 30px;
`;

const Username = styled.p`
  font-weight: bold;
  font-size: 12px;
  margin-left: 30px;
`;

const Likes = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserComment = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-right: 5px;
  margin-top: 15px;
`;

const CommentDescription = styled.p`
  font-size: 13px;
`;

const TranspButton = styled.button`
  text-align: center;
  text-decoration: none;
  display: inline-block;
  background: transparent;
  border: none;
`;

const InputComment = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #333;
  background: transparent;
  border: none;
  border-radius: 3px;
  margin-left: 30px;
  width: 100%;
`;

const CommentActions = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-right: 0;
  margin-top: 250px;
`;

const HeaderModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default class ThumbnailModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return(
      <div>
        <Thumb onClick={this.handleOpenModal} src={this.props.source}></Thumb>
        <ReactModal
        isOpen={this.state.showModal}
        contentLabel="Minimal Modal Example"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        >
          <HeaderModal>
            <TranspButton onClick={this.handleCloseModal}><i className="material-icons" style={{color: '#888'}}>close</i></TranspButton>
          </HeaderModal>
          <Container>
            <FullImage src={this.props.source}></FullImage>
            <Details>
              <UserData>
                <UserPicture src={this.props.profilePicture}></UserPicture>
                <h4>DaenerysSnowS2S2</h4>
                <Button>Following</Button>
              </UserData>
              <Separator />
              <Likes>
                <Username>JohnSnowS2Daenerys and TyrionL liked this</Username>
              </Likes>
              <Comments>
                <Comment>
                  <UserComment>CerseiL</UserComment>
                  <CommentDescription>I'll kill you I'm the true Queen of Westeros</CommentDescription>
                </Comment>
              </Comments>
              <CommentActions>
                <TranspButton><i className="material-icons" style={{color: '#888'}}>favorite_border</i></TranspButton>
                <InputComment type="text" placeholder="Add a comment"></InputComment>
                <TranspButton><i className="material-icons" style={{color: '#888'}}>more_horiz</i></TranspButton>
              </CommentActions>
            </Details>
          </Container>
        </ReactModal>
      </div>
    );
  }
}
