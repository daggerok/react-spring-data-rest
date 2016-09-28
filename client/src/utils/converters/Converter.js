export class Converter {

  _embedded(hateoas) {
    return hateoas['_embedded'] || {};
  }

  _links(hateoas) {
    return hateoas['_links'] || {};
  }
}
