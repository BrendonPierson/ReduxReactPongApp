import { List, Map } from 'immutable';
import { SET_STATE, ADD_S_MATCH } from '../scripts/actions';
import { combineReducers } from 'redux'

function setState(state, newState) {
  /* Map.merge produces map from combing two maps overwriting 
     any keys in state that have different values in newState */
  return state.merge(newState);
}

function addSinglesMatch(state, newState) {
  //1.  Increment users winNum/LossNum
  //2.  Modify users' elo rating
  //3.  Add Match to the singles matches section of the state
}


export default function(state = Map(), action) {
  switch (action.type) {
    case SET_STATE:
      return setState(state, action.state);
    case ADD_S_MATCH:
      return addSinglesMatch(state, newState);
    default:
      return state;
  }
}