import React from 'react';
import { RouteHandler } from 'react-router'

import { AppBar } from 'react-toolbox/lib/app_bar';

const { PropTypes } = React;

import style from './style';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <AppBar theme={style}>
          PodCast Player
        </AppBar>
        <section style={{ paddingTop: 5 }}>
          {this.props.children}
        </section>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

App.prototype.displayName = 'App';
