// useState import 해온다
import React, { useState } from 'react';
import './CreatePage.css';
// 게시판 ckeditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// redux
import { connect, useDispatch } from 'react-redux';
import BoardListReducer from '../reducers/BoardListReducer';
import BlogContentsReducer from '../reducers/BlogContentsReducer';

// useState를 이용해 압력한 값을 state에 저장하는 과정을 구현한다
// input의 내용이 변할 때, 그 값을 state에 업데이트 해준다
// 먼저 input에 적히는 내용을 캐치해야한다
const CreatePage = () => {
  //useDispatch
  const dispatch = useDispatch();

  const [blogContents, setBlogContents] = useState({
    title: '',
    content: '',
  });
  // 새로운 state를 만들어준다. 이 state에는 각각의 적힌 내용들을 저장해 줄 것이다
  //* const [boardList, setBoardList] = useState([]);

  const getValue = e => {
    // 의미: 이벤트가 발생하면 그 이벤트의 name과 value를 가지고 오는 내용이다
    // 이 getValue 함수를 title-input에 적용해준다 / ...(구조분해할당)
    //! 리액트에서는 값을 직접 수정하면 안되기때문에 다음과 같이 복사해서 수정하는 방식을 이용
    const { name, value } = e.target;
    // blogContents의 내용을 복사해서 그 안에 name이라는 이름의 키의 값을 value로 바꿔 저장한다는 의미
    setBlogContents({
      ...blogContents,
      [name]: value,
    });
    // console.log로 잘 작동하는지 확인한다
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
  // 내용을 보면, 버튼을 눌렀을 때 boardList 배열 안에 blogContents라는 객체를 복사해서 concat 해준다음 그 내용으로 변경 해주는 내용
  const buttonOnClickEvent = () => {
    // useDispatch(BoardListReducer());
    dispatch(BoardListReducer());
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
          data="<p></p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
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

export default connect()(CreatePage);
