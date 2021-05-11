import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { useTypedSelector } from '../../hooks/useTypedSelector';
import Header from '../Header';
import ErrorBoundary from '../ErrorBoundary';
// import ErrorIndicator from '../ErrorBoundary/ErrorIndicator';
import ArticlesPage from '../Pages/ArticlesPage';
import FullArticlePage from '../Pages/FullArticlePage';
import { SignUpForm, SignInForm, UpdateProfileForm } from '../Forms';
import classes from './App.module.scss';

// eslint-disable-next-line arrow-body-style
const App: React.FC = () => {
  // const { isError } = useTypedSelector((state) => state.articles);

  return (
    <BrowserRouter>
      <Header />
      <main className={classes.container}>
        <ErrorBoundary>
          <Switch>
            <Route exact path={['/', '/articles', '/articles/:page']} component={ArticlesPage} />
            <Route path="/article/:slug" component={FullArticlePage} />

            <Route path="/sign-up" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
            <Route path="/profile" component={UpdateProfileForm} />
          </Switch>
        </ErrorBoundary>
      </main>
    </BrowserRouter>
  );
};

export default App;
