import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';

import './app.css';

const App = () => {
  return (
    <div className="container">
      <ShopHeader />
      <main role="main">
        <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/cart' component={CartPage} />
        </Switch>
      </main>
    </div>
  );
};

export default App;