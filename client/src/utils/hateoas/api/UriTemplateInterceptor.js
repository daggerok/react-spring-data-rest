import interceptor from 'rest/interceptor';

/* If the URI is a URI Template per RFC 6570 (http://tools.ietf.org/html/rfc6570), trim out the template part */
export const UriTemplateInterceptor = interceptor({

  request: (request /*, config, meta */) => {

    if (request.path.indexOf('{') === -1) {
      return request;
    }

    request.path = request.path.split('{')[0];
    return request;
  }
});
