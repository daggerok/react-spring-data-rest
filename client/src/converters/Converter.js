export default {
  _embedded: (hateoas) => hateoas['_embedded'] || {},
  _links: (hateoas) => hateoas['_links'] || {}
}
