import { combineReducers } from 'redux';

import BoardListReducer from './BoardListReducer';
import BlogContentsReducer from './BlogContentsReducer';

export default combineReducers({
  BoardListReducer,
  BlogContentsReducer,
});
