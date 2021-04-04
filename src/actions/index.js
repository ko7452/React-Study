// action
export const BOARD_SAVE = 'BOARD_SAVE';
export const BLOG_CONTENTS = 'BLOG_CONTENTS';
// action-type
export const board_save = boardList => {
  return {
    type: BOARD_SAVE,
    boardList,
  };
};
export const blog_contents = blogContents => {
  return {
    type: BLOG_CONTENTS,
    blogContents,
  };
};
