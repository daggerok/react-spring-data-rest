import { Converter } from './Converter';

export class UserConverter extends Converter {
  users(hateoas) {
    return this._embedded(hateoas)['users'] || [];
  }
}
