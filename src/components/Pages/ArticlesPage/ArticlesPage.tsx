import React from 'react';

import ArticleItem from '../../Block/ArticleItem';
import Pagination from '../../Block/Pagination';
import classes from './ArticlesPage.module.scss';

const ArticlesPage = () => (
  <ul className={classes.articlesList}>
    <ul>
      <li>
        <ArticleItem />
      </li>
      <li>
        <ArticleItem />
      </li>
      <li>
        <ArticleItem />
      </li>
      <li>
        <ArticleItem />
      </li>
      <li>
        <ArticleItem />
      </li>
    </ul>
    <Pagination postsPerPage={5} postsCount={20} />
  </ul>
);

export default ArticlesPage;
