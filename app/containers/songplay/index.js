import { PODCAST_ID, SOUNDCLOUD_ID } from '../../constants/';

import React from 'react';

import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, Timer } from 'react-soundplayer/components';

var SongPlay = React.createClass({
  contextTypes: {
    router: React.PropTypes.object,
  },

  getInitialState: function() {
    return {
      song: false
    };
  },

  componentDidMount: function() {
    let id = this.props.song;
    this.serverRequest = fetch(`http://api.soundcloud.com/tracks/${id}?client_id=${SOUNDCLOUD_ID}`)
      .then((response) => response.json())
      .then( ( response ) => {
        this.setState({
          song: response
        });
      });
  },

  componentWillUnmount: function() {
  },

  render: function() {
    let song = this.state.song;
    let client = SOUNDCLOUD_ID;

    return (
      <div>
        <SoundPlayerContainer streamUrl={song.stream_url} clientId={client}>
            <PlayButton {...this.props} style={{width: '100px'}}/>
            <Timer duration={song ? song.duration / 1000 : 0} currentTime={0} {...this.props} />
        </SoundPlayerContainer>
      </div>
    );
  }
});

module.exports = SongPlay;
