/**
 * Created by mak on 9/28/16.
 */
export class Converter {
  public _embedded(hateoas) {
    return { _embedded } = hateoas;
  }

  public _links(hateoas) {
    return { _links } = hateoas;
  }
}
