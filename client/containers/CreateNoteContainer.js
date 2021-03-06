import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CreateNote from '../components/CreateNote';

import {getBoard, addUserPermission} from '../actions/board';
import {createNote, receiveNote} from '../actions/note';
import {searchUsername} from '../actions/user';
import {
  socketConnect,
  socketEmit,
  clearSocketListeners,
  socketDisconnect,
  addSocketListener
} from '../actions/socketio';

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);

function mapStateToProps(state) {
  return {
    board       : state.board.selectedBoard,
    user        : state.userReducer.loggedInUser,
    queriedUsers: state.userReducer.queriedUsers,
    permissions : state.board.permissions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createNote,
    getBoard,
    socketConnect,
    addSocketListener,
    socketEmit,
    clearSocketListeners,
    socketDisconnect,
    searchUsername,
    addUserPermission,
    receiveNote
  }, dispatch);
}
