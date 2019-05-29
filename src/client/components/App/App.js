import React from 'react';
import './App.scss';
import Gallery from '../Gallery';
import { connect } from 'react-redux';
import AppActions from './actions';
import GalleryActions from '../Gallery/actions';


class App extends React.Component {
  render() {
    return (
      <div className="app-root">
        <div className="app-header">
          <h2>Flickr Gallery</h2>
          <input
            className="app-input"
            onChange={e => this.props.updateTagAction(e.target.value)}
            value={this.props.tag}/>
          <button
            className="app-button"
            type="button"
            onClick={() => this.props.loadImagesAction(this.props.tag)}>
            Search
          </button>
        </div>
        <Gallery/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    tag: state['app'].get('tag')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTagAction: (tag) => {
      dispatch(AppActions.updateTagAction(tag));
    },
    loadImagesAction: (tag) => {
      dispatch(GalleryActions.loadImagesAction(tag))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
