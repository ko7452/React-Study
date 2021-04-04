// useState import 해온다
import React, { useState } from 'react';
import './CreatePage.css';
// 게시판 ckeditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// redux
import { useDispatch } from 'react-redux';
import { board_save } from '../actions/index';
import BlogContentsReducer from '../reducers/BlogContentsReducer';
//router
import { useHistory } from 'react-router';

const CreatePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [blogContents, setBlogContents] = useState({
    title: '',
    content: '',
  });
  //* const [boardList, setBoardList] = useState([]);

  const getValue = e => {
    const { name, value } = e.target;
    setBlogContents({
      ...blogContents,
      [name]: value,
    });
    console.log('getValue:', name, value);
  };

  const getTextValue = (event, editor) => {
    const data = editor.getData();
    console.log({ event, editor, data });
    setBlogContents({
      ...blogContents,
      content: data,
    });
    console.log(blogContents);
  };

  const buttonOnClickEvent = () => {
    dispatch(board_save(blogContents));
    history.push('/');
    // setBoardList(boardList.concat({ ...blogContents }));
    console.log('SAVE:');
  };

  return (
    <div className="CreatePage">
      <div className="form-wrapper">
        <input
          className="title-input"
          type="text"
          placeholder="제목"
          onChange={getValue}
          name="title"
        />
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={editor => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={getTextValue}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className="submit-button" onClick={buttonOnClickEvent}>
        입력
      </button>
    </div>
  );
};

export default CreatePage;
