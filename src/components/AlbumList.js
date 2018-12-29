import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  async componentDidMount() {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const albums = await res.json();
    this.setState({ albums });
  }

  render() {
    const { albums } = this.state;
    return (
      <View>
        {albums.map(x => <AlbumDetail key={x.title} {...x} />)}
      </View>
    );
  }
}

export default AlbumList;
