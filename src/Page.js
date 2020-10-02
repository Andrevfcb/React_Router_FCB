import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import SuccessesPage from './pages/SuccessesPage';
import PlayerPage from './pages/PlayerPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/teams" component={TeamPage} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/successes" component={SuccessesPage} />
        <Route path="/team/:id" component={PlayerPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={HomePage} />
      </Switch>
    </>
  );
}

export default Page;