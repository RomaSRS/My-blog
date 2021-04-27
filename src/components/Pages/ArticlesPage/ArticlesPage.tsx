import React from 'react';

import ArticleItem from '../../Block/ArticleItem';

import classes from './ArticlesPage.module.scss';

const ArticlesPage = () => (
  <ul className={classes.articlesList}>
    <li className={classes.article} />
    <li className={classes.article} />
    <li className={classes.article} />
    <li className={classes.article} />
    <li className={classes.article} />
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
  </ul>
);

export default ArticlesPage;
