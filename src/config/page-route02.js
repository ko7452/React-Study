import React from 'react';
import { Redirect } from 'react-router';

import Home from '../pages/Home';
import YoutubeRecastly from '../pages/YoutubeRecastly';

const routes02 = [
  {
    // localhost3000번에서 아무것도 입력이 안된 초기 페이지는 home으로 설정
    path: '/',
    exact: true,
    component: () => <Redirect to="/home" />,
  },
  {
    path: 'home',
    component: () => <Home />,
  },
  {
    path: 'youtubeClone',
    component: () => <YoutubeRecastly />,
  },
];

export default routes02;
