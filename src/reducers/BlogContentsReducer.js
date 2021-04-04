import { BLOG_CONTENTS } from '../actions/index';

const initialState = {
  title: '',
  content: '',
};

const BlogContentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOG_CONTENTS:
      return Object.assign({}, state, {
        blogContents: action.blogContents,
      });
    default:
      return state;
  }
};

export default BlogContentsReducer;
