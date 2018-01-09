import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import List from './List.jsx';
import Footer from './Footer.jsx';

const Root = styled.div`
  font-family: Roboto, sans-serif;
  background-color: #FAFAFA;
`;

const User = {
  username: 'DaenerysSnowS2S2',
  name: 'Daenerys Targeryan',
  bio: `I'm Daenerys Stormborn of the House Targaryen, the First of My Name, The Unburnt,
  Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen,
  Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regnant of the Seven Kingdoms,
  Breaker of Chains and Mother of Dragons`,
  profilePicSrc: './assets/daenerysProfile.jpeg',
  followers: '10M',
  following: '10k',
  picturesSrc: [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/3.jpg',
    './assets/1.jpg',
    './assets/4.jpg',
    './assets/2.jpg'
  ]
}

export default class App extends React.Component {
  render () {
    return(
      <Root>
        <header>
          <Header user={User}/>
        </header>
        <List user={User} />
        <footer>
          <Footer />
        </footer>
      </Root>
    );
  }
}
