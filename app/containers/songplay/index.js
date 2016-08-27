import { PODCAST_ID, SOUNDCLOUD_ID } from '../../constants/';

import React from 'react';

import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { Cover, PlayButton, Timer } from 'react-soundplayer/components';


var SongPlay = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
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

    console.log(song);
    return (
      <div key="songplay">
        <Cover
          trackName={song.title}
          artistName={'Testes'}
          backgroundUrl={song.artwork_url}
        />
        <SoundPlayerContainer resolveUrl={song.stream_url} clientId={client}>
          <div className="p1 mb3 mt3 flex flex-center bg-darken-1 red rounded">
            <PlayButton className="flex-none h4 mr2 button button-transparent button-grow rounded" {...this.props} />
            <h2 className="h5 nowrap caps flex-auto m0">{song ? song.title : 'Loading...'}</h2>
            <Timer className="h6 mr1" duration={song ? song.duration / 1000 : 0} currentTime={0} {...this.props} />
        </div>

        </SoundPlayerContainer>
      </div>
    );
  }
});

module.exports = SongPlay;
