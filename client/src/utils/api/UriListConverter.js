/**
 * Created by mak on 9/28/16.
 */
export const UriListConverter = {
  read: (str /*, opts */) => str.split('\n'),

  // If this is an Array, extract the self URI and then
  // join using a newline otherwise, just return the self URI
  write: (obj /*, opts */) =>
    (obj instanceof Array)
      ? obj.map(resource => resource._links.self.href).join('\n')
      : obj._links.self.href
};
