/**
 * Created by mak on 9/29/16.
 */
import rest from 'rest';

export const uri = '/api/users';

export const getClient = rest(uri);

export const deleteClient = (id) => rest({
  method: 'DELETE',
  path: `${uri}/${id}`
});
