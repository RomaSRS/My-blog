import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticlesList from '../../ArticlesList';
import Pagination from '../../Block/Pagination';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { getArticles } from '../../../redux/actions';
import './ArticlesPage.module.scss';

const ArticlesPage: React.FC = () => {
  const { isLoading, articles, articlesCount } = useTypedSelector((state) => state.articles);
  const dispatch = useDispatch();

  const { page }: any = useParams();

  useEffect(() => {
    dispatch(getArticles(page ? page * 10 : 0));
  }, [page, dispatch]);

  return (
    !isLoading && (
      <>
        <ArticlesList articles={articles || []} />
        <Pagination articlesPerPage={10} articlesCount={articlesCount} />
      </>
    )
  );
};

export default ArticlesPage;
