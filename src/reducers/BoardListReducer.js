// reducer
import { BOARD_SAVE } from '../actions/index';

const initalState = [];

// 정의한 action을 reducer애서 handling
const BoardListReducer = (state = initalState, action) => {
  console.log('action', action);
  switch (action.type) {
    case BOARD_SAVE:
      return state.concat(action.boardList);
    default:
      return state;
  }
};

export default BoardListReducer;
