import React from 'react';
import ArticleItem from '../Block/ArticleItem';
import newId from '../../helpers/uniqueId';
import { IArticle, IArticles } from '../../types/articles';
import './ArticlesList.module.scss';

const ArticlesList: React.FC<IArticles> = ({ articles }) => (
  <>
    <ul>
      {articles.map((el: IArticle) => (
        <li key={newId('article')}>
          <ArticleItem data={el} />
        </li>
      ))}
    </ul>
  </>
);

export default ArticlesList;
