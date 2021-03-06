import { IError, IForm, IUser, UserActionTypes, UserEndPoints } from '../../types/user';
import { postFetch, getCurrentUser, updateResource } from '../../services';
import { LocalStorage } from '../../helpers/constants';
import { getToken } from '../../helpers/storage';

export const login = (user: IUser) => ({
  type: UserActionTypes.LOGIN,
  user,
});

export const sendingForm = (isFetching: boolean) => ({
  type: UserActionTypes.FETCHING,
  isFetching,
});

export const fetchUserError = (error: IError) => ({
  type: UserActionTypes.FETCH_USER_ERROR,
  error,
});

export const logOut = () => ({
  type: UserActionTypes.LOG_OUT,
});

export const loginUser = (body: IForm) => async (dispatch: Function) => {
  try {
    dispatch(sendingForm(true));
    const data = await postFetch(body, UserEndPoints.LOGIN);
    getToken(LocalStorage, data);
    dispatch(login(data));
  } catch (error) {
    dispatch(fetchUserError(error.response.data.errors));
  } finally {
    dispatch(sendingForm(false));
  }
};

export const registerUser = (body: IForm) => async (dispatch: Function) => {
  try {
    dispatch(sendingForm(true));
    const data = await postFetch(body, UserEndPoints.REGISTER);
    getToken(LocalStorage, data);
    dispatch(login(data));
  } catch (error) {
    dispatch(fetchUserError(error.response.data.errors));
  } finally {
    dispatch(sendingForm(false));
  }
};

export const getProfile = () => async (dispatch: Function) => {
  const token = localStorage.getItem(LocalStorage.TOKEN);
  if (token) {
    const data = await getCurrentUser(UserEndPoints.UPDATE);
    dispatch(login(data));
  }
};

export const updateProfile = (body: IForm) => async (dispatch: Function) => {
  try {
    dispatch(sendingForm(true));
    dispatch(fetchUserError(null));
    const data = await updateResource(body, UserEndPoints.UPDATE);
    dispatch(login(data));
  } catch (error) {
    dispatch(fetchUserError(error.response.data.errors));
  } finally {
    dispatch(sendingForm(false));
  }
};
