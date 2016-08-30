import { PODCAST_ID, SOUNDCLOUD_ID } from '../../constants/';

import React from 'react';

import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { SoundCloudAudio, PlayButton, Timer } from 'react-soundplayer/components';

import styles from './styles.scss';

var SongWall = React.createClass({
    componentDidMount: function() {
      console.log(this.props.song.artwork_url);
    },

    render: function() {
      return(
        <div className={styles.SongWall}>
          <img src={this.props.song ? this.props.song.artwork_url.replace('large','t500x500') : '' } />
        </div>
      )
    }
});
var SongPlay = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  getInitialState: function() {
    return {
      song: false,
      track: ''
    };
  },

  getSong: function( nextProps ) {
    let id = nextProps ? nextProps.song : this.props.song;
    this.serverRequest = fetch(`http://api.soundcloud.com/tracks/${id}?client_id=${SOUNDCLOUD_ID}`)
      .then((response) => response.json())
      .then( ( response ) => {
        this.setState({
          song: response,
          track: response.title
        });
      });
  },

  componentDidMount: function() {
    this.getSong();
  },

  componentWillUnmount: function() {
    this.setState({
      song: false
    });
  },

  render: function() {
    let song = this.state.song;
    let client = SOUNDCLOUD_ID;
    let wig    = '100px';
    return (
      <div key={song.id}>
        <SoundPlayerContainer streamUrl={song.stream_url} clientId={client}>
            <SongWall {...this.props} song={song}/>

            <PlayButton {...this.props} style={{width: wig }}/>
            <Timer duration={song ? song.duration / 1000 : 0} currentTime={0} {...this.props} />

        </SoundPlayerContainer>
      </div>
    );
  }
});

module.exports = SongPlay;
