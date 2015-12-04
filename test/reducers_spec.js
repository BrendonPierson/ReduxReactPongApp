import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';
import reducer from '../scripts/reducers';
import { SET_STATE } from '../scripts/actions';

describe('reducer', () => {

	it('handles SET_STATE with Map()', () => {
		const initialState = Map();
		const action = {
			type: SET_STATE,
			state: Map({
        player1: "Brendon",
        player2: "Dan",
        player1Score: 24,
        player2Score: 22
			})
		};
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS(
        {
          player1: "Brendon",
          player2: "Dan",
          player1Score: 24,
          player2Score: 22
        }
    ))
	});

  it('handles SET_STATE with List()', () => {
    const initialState = List();
    const action = {
      type: SET_STATE,
      state: List.of("brendon", "dan")
    }
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS(["brendon", "dan"]));
  });

  it('handles SET_STATE with Map() of List()', () => {
    const initialState = Map();
    const action = {
      type: SET_STATE,
      state: Map({
        users: List.of("brendon", "dan", "tom"),
        matches: List.of(
          Map({
            player1: "Brendon",
            player2: "Dan",
            player1Score: 24,
            player2Score: 22
          }),
          Map({
            player1: "tom",
            player2: "Dan",
            player1Score: 10,
            player2Score: 21
          })
        ),
        currentUser: "Brendon"
      })
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      users: ["brendon", "dan", "tom"],
      matches: [
        {
          player1: "Brendon",
          player2: "Dan",
          player1Score: 24,
          player2Score: 22
        },
        {
          player1: "tom",
          player2: "Dan",
          player1Score: 10,
          player2Score: 21
        }
      ],
      currentUser: "Brendon"
    }));
  });

});