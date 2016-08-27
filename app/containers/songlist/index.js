import { PODCAST_ID, SOUNDCLOUD_ID } from '../../constants/';

import React from 'react';

import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';

import style from '../../theme/_songlist'

var SongList = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  gotoSong: function( song ) {
    this.context.router.push('/playsong/' + song.id);
  },

  getInitialState: function() {
    return {
      songs: []
    };
  },

  componentDidMount: function() {
    this.serverRequest = fetch(`http://api.soundcloud.com/users/${PODCAST_ID}/tracks?client_id=${SOUNDCLOUD_ID}`)
      .then((response) => response.json())
      .then( ( response ) => {
        this.setState({
          songs: response
        });
      });
  },

  render: function() {
    let songs = this.state.songs;
    return (
      <List selectable theme={style}>
        {songs.map((song) => {
          let boundItemClick = this.gotoSong.bind(this, song);

          return <ListItem
            theme={style}
            key={song.id}
            avatar={song.artwork_url}
            caption={song.title}
            legend="Teste"
            rightIcon='star'
            onClick={boundItemClick}
          />
        })}

      </List>
    );
  }

});


module.exports = SongList;
