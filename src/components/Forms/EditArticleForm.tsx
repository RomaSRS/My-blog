import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import cn from 'classnames';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { validationRules } from '../../helpers/constants';
import { IEditArticleForm } from '../../types/user';
import styles from './Forms.module.scss';
import { createArticle, getFullArticle, successCreate, updateArticle } from '../../redux/actions/articles';

const EditArticleForm: React.FC<{ edit?: boolean; slug: string }> = ({ edit, slug }) => {
  const { isLoading, fullArticle, isSuccess } = useTypedSelector((state) => state.articles);
  const { register, handleSubmit, errors, setValue, getValues, control } = useForm<IEditArticleForm>();
  const [tagsData, setTagsData] = useState(edit ? [...fullArticle.tagList, ''] : ['']);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (edit && fullArticle) {
      setValue('title', fullArticle.title, { shouldValidate: true });
      setValue('description', fullArticle.description, { shouldValidate: true });
      setValue('body', fullArticle.body, { shouldValidate: true });
    }
  }, [edit, fullArticle, setValue]);

  useEffect(() => {
    if (edit && !fullArticle) {
      dispatch(getFullArticle(slug));
    }
  }, [edit, fullArticle, dispatch, slug]);

  useEffect(() => {
    if (isSuccess) {
      history.push(`/article/${fullArticle.slug}`);
      dispatch(successCreate(false));
    }
  }, [dispatch, fullArticle, history, isSuccess]);

  const onSubmit = (data: IEditArticleForm) => {
    // @ts-ignore
    const tagList = [...new Set(getValues({ nest: true }).tagList)];
    const body = {
      article: {
        title: data.title,
        description: data.description,
        body: data.body,
        tagList,
      } as IEditArticleForm,
    };

    if (!edit) dispatch(createArticle(body));
    if (edit) dispatch(updateArticle(body, slug));
  };

  const addTag = (): void => {
    setTagsData(() => [...tagsData, '']);
  };

  const remove = (index: number): void => {
    setTagsData(() => [...tagsData.slice(0, index), ...tagsData.slice(index + 1)]);
  };

  return (
    <form className={cn(styles.form, styles.editArticle)} onSubmit={handleSubmit(onSubmit)}>
      <h2>{edit ? 'Edit' : 'Create new'} article</h2>

      <label>
        Title
        <input
          aria-invalid={!!errors.title}
          type="text"
          name="title"
          placeholder="Title"
          ref={register(validationRules.title)}
        />
        {errors.title && <span className={styles.error}>{errors.title.message}</span>}
      </label>

      <label>
        Short description
        <input
          aria-invalid={!!errors.description}
          type="text"
          name="description"
          placeholder="Short description"
          ref={register(validationRules.description)}
        />
        {errors.description && <span className={styles.error}>{errors.description.message}</span>}
      </label>

      <label htmlFor="textarea">Text</label>
      <textarea className={styles.flexGrow} name="body" placeholder="Text" ref={register(validationRules.textarea)} />
      {errors.body && <span className={styles.error}>{errors.body.message}</span>}

      <h2>Tags</h2>

      <form className={styles.fieldset}>
        <ul className={styles.tagList}>
          {tagsData.map((tag, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`tag_${index}`}>
              <Controller
                as={<input />}
                name={`tagList[${index}]`}
                control={control}
                placeholder="Tag"
                defaultValue={tag}
              />
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button className={styles.addButton} type="button" onClick={() => addTag()}>
          Add tag
        </button>
      </form>

      <button type="submit" disabled={!!isLoading}>
        {isLoading ? <span className={styles.loading} /> : 'Send'}
      </button>
    </form>
  );
};

export default EditArticleForm;
