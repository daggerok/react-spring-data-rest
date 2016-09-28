/**
 * Created by mak on 9/28/16.
 */
export class Converter {
  _embedded(hateoas) {
    return hateoas['_embedded'] || {};
  }

  _links(hateoas) {
    return hateoas['_links'] || {};
  }
}
