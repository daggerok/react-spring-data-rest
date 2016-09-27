/**
 * Created by mak on 9/28/16.
 */
export class Converter {
  _embedded(hateoas) {
    return { _embedded } = hateoas;
  }

  _links(hateoas) {
    return { _links } = hateoas;
  }
}
