/**
 * Created by mak on 9/28/16.
 */
import rest from 'rest';
import defaultRequest from 'rest/interceptor/defaultRequest';
import mime from 'rest/interceptor/mime';
import errorCode from 'rest/interceptor/errorCode';
import baseRegistry from 'rest/mime/registry';
import hal from 'rest/mime/type/application/hal';

import {
  UriTemplateInterceptor,
  UriListConverter
} from './api';

const registry = baseRegistry.child();
registry.register('text/uri-list', UriListConverter);
registry.register('application/hal+json', hal);

export const Client = () => {

  return rest.wrap(mime, { registry: registry })
             .wrap(UriTemplateInterceptor)
             .wrap(errorCode)
             .wrap(defaultRequest, { headers: { 'Accept': 'application/hal+json' }});
};
