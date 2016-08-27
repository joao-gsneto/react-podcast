import React from 'react';
import { Link } from 'react-router';
import Button from 'react-toolbox';
import {Card, CardTitle, CardMedia, CardText, CardActions} from 'react-toolbox';
import style from './style';
import SongPlay from '../../containers/songplay';

class  PlaySong extends React.Component {
  render() {
    let song = this.props.params.songId;
    return(
      <SongPlay song={song}></SongPlay>
    );
  }
};

module.exports = PlaySong;
