import React from 'react';
import { Switch, Route } from 'react-router-dom';
// 설정한 css를 import
import './Content.css';
// 설정한 라우터를 import
import routes from '../../config/page-route';

function Content() {
  return (
    <div className="Content">
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </div>
  );
}

export default Content;
