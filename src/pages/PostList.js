import React, { useState } from 'react';
import './PostList.css';

import { useSelector } from 'react-redux';

//mapToProps 기능
function PostList() {
  const test = useSelector(state => {
    console.log(state);
    return state;
  });

  console.log(test);

  return (
    <div className="PostList">
      <div className="text-container">
        <div>
          {test.BoardListReducer.map(x => {
            console.log('x:', x);
            return (
              <div>
                <h2>제목: {x.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: x.content }}></div>
              </div>
            );
          })}
        </div>
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
