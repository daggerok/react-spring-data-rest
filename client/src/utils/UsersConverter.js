/**
 * Created by mak on 9/28/16.
 */
import { Converter } from './Converter';

export class UsersConverter extends Converter {
  public users(hateoas) {
    return { users } = this._embedded(hateoas);
  }
}
