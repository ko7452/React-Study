// reducer
import { BOARD_SAVE } from '../actions/index';

// 정의한 action을 reducer애서 handling
const BoardListReducer = (state = [], action) => {
  switch (action.type) {
    case BOARD_SAVE:
      return Object.assign({}, state, {
        boardList: action.boardList,
      });
    default:
      return state;
  }
};

export default BoardListReducer;
