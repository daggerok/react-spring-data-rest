/**
 * Created by mak on 9/29/16.
 */
import rest from 'rest';

export const uri = '/me';
export const client = rest(uri);
export const isAuthenticated = (response) => {
  if (!response || !response.entity) {
    return false;
  }

  const entity = response.entity;

  if (entity) {
    const { authenticated } = JSON.parse(entity);
    return authenticated;
  }

  return false;
};
