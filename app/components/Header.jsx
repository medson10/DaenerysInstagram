import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  margin-top: 0px;
`;

const UserPicture = styled.img`
  border-radius: 100%;
  margin: 30px 50px 30px 0px;
  height: 160px;
  width: 160px;
`;

const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0px 30px 0px;
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
`;

const UserName = styled.h3`
  font-weight: bold;
  margin-right: 15px;
`;

const Button = styled.button`
  background-color: #ECECEC;
  height: 30px;
  margin-top: 15px;
  border: .5px solid #333;
  border-radius: 5%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  margin-right: 2px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const UserAbout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  width: 600px;
  font-align: justify;
  line-height: 20px;
  margin-top: 0px;
`;

const Counter = styled.p`
  font-weight: bold;
`;

export default class Header extends React.Component {
  render () {
    return(
      <div>
        <Container>
          <h1>Astrogram</h1>
          <Content>
            <UserPicture src={this.props.user.profilePicSrc}></UserPicture>
            <UserData>
              <UserActions>
                <UserName>{this.props.user.username}</UserName>
                <Button>Following</Button>
                <Button><i className="material-icons">keyboard_arrow_down</i></Button>
                <Button><i className="material-icons">more_horiz</i></Button>
              </UserActions>
              <UserInfo>
                <Counter>{this.props.user.picturesSrc.length} posts</Counter>
                <Counter>{this.props.user.followers} followers</Counter>
                <Counter>{this.props.user.following} following</Counter>
              </UserInfo>
              <UserAbout>
                <p>{this.props.user.name}</p>
                <Description>{this.props.user.bio}</Description>
              </UserAbout>
            </UserData>
          </Content>
        </Container>
      </div>
    );
  }
}
