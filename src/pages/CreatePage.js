import React from 'react';
import './CreatePage.css';

function CreatePage() {
  return (
    <div className="CreatePage">
      <h3> 새 글을 작성해주세요</h3>
      <div className="form-wrapper">
        <input className="title-input" type="text" placeholder="제목" />
        <textarea className="text-area" placeholder="내용" />
      </div>
      <button className="submit-button">입력</button>
    </div>
  );
}

export default CreatePage;
