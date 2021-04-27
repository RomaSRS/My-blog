import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import classes from './App.module.scss';
import Header from '../Header';
import ArticlesPage from '../Pages/ArticlesPage';
import FullArticlePage from '../Pages/FullArticlePage';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <main className={classes.container}>
      <Route exact path={['/', '/articles']} component={ArticlesPage} />
      <Route path="/articles/test" component={FullArticlePage} />
    </main>
  </BrowserRouter>
);

export default App;
