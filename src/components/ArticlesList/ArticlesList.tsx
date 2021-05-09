import React from 'react';
import ArticleItem from '../Block/ArticleItem';
import { IArticle, IArticles } from '../../types/articles';
import './ArticlesList.module.scss';

const ArticlesList: React.FC<IArticles> = ({ articles }) => (
  <>
    <ul>
      {articles.map((el: IArticle) => (
        <li key={el.createdAt}>
          <ArticleItem data={el} />
        </li>
      ))}
    </ul>
  </>
);

export default ArticlesList;
