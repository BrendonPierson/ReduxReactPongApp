import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';
import reducer from '../scripts/reducers';
import { SET_STATE } from '../scripts/actions';

describe('reducer handles SET_STATE action', () => {

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

  it('can set state with plain js object', () => {
    const initialState = Map();
    const action = {
      type: SET_STATE,
      state: {
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
      }
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

  it('handles firebase data to set state', () => {
    const initialState = Map();
    const action = {
      type: SET_STATE,
      state: {
        doublesMatches: {
          K1_od4Ss_OuL8Pp4DTj: {
          date: 1445891051809,
          league: "-K1Oj3Lu4QWU52ffHxCQ",
          t1player1: "github:9828803",
          t1player2: "github:12013667",
          t1score: 21,
          t2player1: "github:12600385",
          t2player2: "github:13152865",
          t2score: 12,
          team1Rating: 1300,
          team2Rating: 1300,
          winMargin: 9
        },
          K1_qGB3yVPfQwEvZckx: {
          date: 1445891478208,
          league: "-K1Oj3Lu4QWU52ffHxCQ",
          t1player1: "github:9828803",
          t1player2: "github:12013667",
          t1score: 11,
          t2player1: "github:13152865",
          t2player2: "github:12600385",
          t2score: 21,
          team1Rating: 1316,
          team2Rating: 1284,
          winMargin: 10
          }
        }
      }
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      doublesMatches: {
        K1_od4Ss_OuL8Pp4DTj: {
          date: 1445891051809,
          league: "-K1Oj3Lu4QWU52ffHxCQ",
          t1player1: "github:9828803",
          t1player2: "github:12013667",
          t1score: 21,
          t2player1: "github:12600385",
          t2player2: "github:13152865",
          t2score: 12,
          team1Rating: 1300,
          team2Rating: 1300,
          winMargin: 9
        },
        K1_qGB3yVPfQwEvZckx: {
          date: 1445891478208,
          league: "-K1Oj3Lu4QWU52ffHxCQ",
          t1player1: "github:9828803",
          t1player2: "github:12013667",
          t1score: 11,
          t2player1: "github:13152865",
          t2player2: "github:12600385",
          t2score: 21,
          team1Rating: 1316,
          team2Rating: 1284,
          winMargin: 10
        }
      }
    }));
  });

});