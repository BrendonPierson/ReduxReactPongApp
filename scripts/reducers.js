import { List, Map } from 'immutable';

function setState(state, newState) {
	/* Map.merge produces map from combing two maps overwriting any keys in state that have different values in newState */
	return state.merge(newState);
}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    default:
      return state;
  }
}