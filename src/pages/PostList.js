import React, { useState } from 'react';
import './PostList.css';

function PostList() {
  return (
    <div className="PostList">
      <div className="text-container">
        <h2>제목</h2>
        <div>내용</div>
      </div>
    </div>
  );
}

export default PostList;

// class형 - componentDidMount
// 함수형 - useEffect
//* redux OR server 활용
// redux thunk & Saga  >> server에서 데이터를 동기적으로 받아 올 때 유용

// 1. 아키텍쳐 설계
// 2. solid 5가지 원칙
// 3. 필수적인 스텍 react, redux, styled-component(css)
