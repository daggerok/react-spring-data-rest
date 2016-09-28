/**
 * Created by mak on 9/28/16.
 */
import { Converter } from './Converter';

export class UsersConverter extends Converter {
  users(hateoas) {
    return this._embedded(hateoas)['users'] || [];
  }
}
