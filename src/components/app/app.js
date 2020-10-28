import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../context/user-context';

export default () => {
  const [name, setName] = useState('Igor');
  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/error" component={() => <h1>Error Page</h1>} />
          <Redirect exact from="/" to="/restaurants/a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2/menu" />
          <Route path="/" component={() => '404 - not found'} />
        </Switch>
      </UserProvider>
    </div>
  );
};
