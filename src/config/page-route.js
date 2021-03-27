// 이 파일에서는 router를 정의합니다
// react-router 모둘을 import 해옵니다
// 그 다음 라우트를 할 page를 src/pages에 생성합니다
// 생성한 page를 import 해옵니다
import React from 'react';
import { Redirect } from 'react-router';

import Home from '../pages/Home';
import PostList from '../pages/PostList';
import CreatePage from '../pages/CreatePage';
import Contact from '../pages/Contact';

// routes '배열'을 정의한다
const routes = [
  {
    // localhost3000번에서 아무것도 입력이 안된 초기 페이지는 home으로 설정
    path: '/',
    exact: true,
    component: () => <Redirect to="/PostList" />,
  },
  {
    path: 'home',
    component: () => <Home />,
  },
  {
    path: '/PostList',
    component: () => <PostList />,
  },
  {
    path: '/CreatePage',
    component: () => <CreatePage />,
  },
  {
    path: '/contact',
    component: () => <Contact />,
  },
];

export default routes;
// 이 component를 exports 해준다

// 여기까지 이렇게 route 파일을 만들어줬다
