import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import classes from './App.module.scss';
import Header from '../Header';
import ErrorBoundary from '../ErrorBoundary';
import ArticlesPage from '../Pages/ArticlesPage';
import FullArticlePage from '../Pages/FullArticlePage';
import { SignUpForm, SignInForm } from '../Forms';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <main className={classes.container}>
      <Route exact path={['/', '/articles']} component={ArticlesPage} />
      <Route exact path="/articles/:page" component={ArticlesPage} />
      <ErrorBoundary>
        <Route exact path={['/', '/articles']} component={ArticlesPage} />
        <Route exact path="/articles/:page" component={ArticlesPage} />
        <Route path="/article/:slug" component={FullArticlePage} />
        <Route path="/sign-up" component={SignUpForm} />
        <Route path="/sign-in" component={SignInForm} />
      </ErrorBoundary>
    </main>
  </BrowserRouter>
);

export default App;
