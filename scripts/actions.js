/*
* Action Types
*/
export const ADD_S_MATCH = 'ADD_S_MATCH';
export const ADD_NEW_USER = 'ADD_NEW_USER';
export const SET_STATE = 'SET_STATE';

/*
* Action Creators
*/
export function addSinglesMatch(match) {
	return { type: ADD_S_MATCH, match };
}
export function addNewUser(user) {
	return { type: ADD_NEW_USER, user };
}
export function setState(state) {
	return { type: SET_STATE, state };
}