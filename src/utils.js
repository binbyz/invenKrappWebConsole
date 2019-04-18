import btoa from 'btoa';

export const messageMassage = (message) => {
  let prefix = `${Math.random()}$$`;
  let suffix = `$$${Math.random()}`;
  return btoa(btoa(`${prefix}${typeof message === 'object' ? JSON.stringify(message) : message}${suffix}`));
};