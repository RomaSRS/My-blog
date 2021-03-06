export interface IArticle {
  title: string;
  slug: string;
  offset: string;
  body: string;
  tagList: string[];
  createdAt: string;
  description: string;
  author: IArticleAuthor;
  favoritesCount: number;
  favorited: boolean;
}

interface IArticleAuthor {
  username: string;
  image: string;
}

export interface IArticles {
  articles: IArticle[] | null;
  articlesCount?: number;
}

export interface IArticlesState extends IArticles {
  fullArticle: IArticle | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isLiking: boolean;
}

export enum ArticlesActions {
  LOAD_ARTICLES = 'LOAD_ARTICLES',
  LOAD_FULL_ARTICLE = 'LOAD_FULL_ARTICLE',
  FETCHING = 'FETCHING',
  FETCH_ERROR = 'FETCH_ERROR',
  SUCCESS_CREATE = 'SUCCESS_CREATE',
  FETCH_LIKE = 'FETCH_LIKE',
}

interface ILoadArticlesAction {
  type: ArticlesActions.LOAD_ARTICLES;
  articles: IArticles;
}

interface ILoadFullArticleAction {
  type: ArticlesActions.LOAD_FULL_ARTICLE;
  article: IArticle;
}

interface IFetchingAction {
  type: ArticlesActions.FETCHING;
  isLoading: boolean;
}

interface IFetchErrorAction {
  type: ArticlesActions.FETCH_ERROR;
}

interface ISuccessCreate {
  type: ArticlesActions.SUCCESS_CREATE;
  isSuccess: boolean;
}

interface IFetchLike {
  type: ArticlesActions.FETCH_LIKE;
  isLiking: boolean;
  slug?: string;
  isFull?: boolean;
}

export type IArticlesAction =
  | ILoadArticlesAction
  | ILoadFullArticleAction
  | IFetchingAction
  | IFetchErrorAction
  | ISuccessCreate
  | IFetchLike;
