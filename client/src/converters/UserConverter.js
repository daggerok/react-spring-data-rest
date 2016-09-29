import Converter from './Converter';

export default {
  users: (hateoas) => Converter._embedded(hateoas)['users'] || []
}
