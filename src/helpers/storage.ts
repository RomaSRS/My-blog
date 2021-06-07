export const getToken = (storage: any, data: any) => {
  localStorage.setItem(storage.TOKEN, JSON.stringify(data.user.token));
};