// reducer
import { SET_VIEW_CONTENTS } from '../actions/index';
// 초기 state 값을 정의
const initialState = {
  viewContents: [],
};
// 정의한 action을 reducer애서 handling
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEW_CONTENTS:
      return Object.assign({}, state, {
        viewContents: state.viewContents,
      });
    default:
      return state;
  }
};

export default postReducer;
