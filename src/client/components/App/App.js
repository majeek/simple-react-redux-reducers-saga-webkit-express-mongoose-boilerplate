import React from 'react';
import './App.scss';
import Gallery from '../Gallery';
import { connect } from 'react-redux';
import AppActions from './actions';
import GalleryActions from '../Gallery/actions';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';

class App extends React.Component {
  render() {
    return (
      <div className="app-root">
        <div className="app-header">
          <h2>Flickr Gallery</h2>
          <Dropdown
              value={this.props.tag}
              options={this.props.tags.toJSON()}
              onChange={this.props.updateTagAction}
              editable={true}
              placeholder="insert a tag"
            />
          <Button
              label="Search"
              className="p-button-raised p-button-rounded"
              onClick={() => this.props.loadImagesAction(this.props.tag)}
          />
        </div>
        <Gallery/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      tag: state['app'].get('tag'),
      tags: state['app'].get('tags')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTagAction: (e) => {
      dispatch(AppActions.updateTagAction(e.value));
    },
    loadImagesAction: (tag) => {
      dispatch(GalleryActions.loadImagesAction(tag))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
