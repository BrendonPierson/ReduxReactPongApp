import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';
import reducer from '../scripts/reducers';

describe('reducer', () => {
	it('handles SET_STATE', () => {
		const initialState = Map();
		const action = {
			type:'SET_STATE',
			state: Map({
				singlesMatches: Map({
          K1Zu9S_tAIdhHdnlStU: Map({
            date : 1445875723581,
            league : "-K1Oj3Lu4QWU52ffHxCQ",
            player1 : "github:9828803",
            player1Rating : 1300,
            player1pts : 21,
            player2 : "github:12013667",
            player2Rating : 1300,
            player2pts : 16,
            winMargin : 5
          })
        })
			})
		};
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      singlesMatches: {
        K1Zu9S_tAIdhHdnlStU: {
          date: 1445875723581,
          league: "-K1Oj3Lu4QWU52ffHxCQ",
          player1: "github:9828803",
          player1Rating: 1300,
          player1pts: 21,
          player2: "github:12013667",
          player2Rating: 1300,
          player2pts: 16,
          winMargin: 5
        }
      }
    }))
	});
});