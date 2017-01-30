import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import {NOTE} from '../constants';
import shouldPureComponentUpdate from './shouldPureComponentUpdate';

const styles = {
  border  : '1px dashed gray',
  padding : '0.5rem 1rem',
  cursor  : 'move',
  height  : 100,
  width   : 100,
  position: 'absolute'
};


const noteSource = {
  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  },
};


const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging       : monitor.isDragging()
});

class Note extends Component {


  // shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    const { hideSourceOnDrag, left, top, connectDragSource, isDragging, children } = this.props;
    if (isDragging && hideSourceOnDrag) {
      return null;
    }
    return connectDragSource(
      <div style={{ ...styles, left, top }}>
        {children}
      </div>
    );
  }
}

export default DragSource(NOTE, noteSource, collect)(Note);