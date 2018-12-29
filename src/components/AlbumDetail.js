import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, Text, View, Linking,
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
  thumnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
};

const {
  headerContentStyle, headerTextStyle, imageStyle,
  thumnailContainerStyle, thumbnailStyle,
} = styles;

const AlbumDetail = ({
  artist, image, title, thumbnail_image: uri, url,
}) => (
  <Card>
    <CardSection>
      <View style={thumnailContainerStyle}>
        <Image style={thumbnailStyle} source={{ uri }} />
      </View>
      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image style={imageStyle} source={{ uri: image }} />
    </CardSection>
    <CardSection>
      <Button onPress={() => Linking.openURL(url)} text="Buy Now" />
    </CardSection>
  </Card>
);

AlbumDetail.propTypes = {
  artist: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  thumbnail_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default AlbumDetail;
