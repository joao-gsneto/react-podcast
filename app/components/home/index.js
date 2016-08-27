import React from 'react';
import { Link } from 'react-router';
import Button from 'react-toolbox';
import {Card, CardTitle, CardMedia, CardText, CardActions} from 'react-toolbox';
import style from './style';
import SongList from '../../containers/songlist';

const Home = () => (
  <SongList></SongList>
);

export default Home;
