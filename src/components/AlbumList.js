import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//component boiler plate
//must return some type of jsx

//functional component
// const AlbumList = () => {
//   return (
//     <View>
//       <Text>Album List!!!!</Text>
//     </View>
//   );
// };

//class component refactored from functional component
//render method must return jsx
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} /> //name of variable does not have to match prop
    );
  }

  //needs to scroll
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
   );
 }
} //classes dont need ; at end of brackets

export default AlbumList;
