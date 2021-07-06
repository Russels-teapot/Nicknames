export default class Validator {
  validateUsername(username) {
    const regexp = /^([a-z])(([a-z]*|\d{0,3}|[_-]*)[a-z])*([a-z]?)$/i;
    return regexp.test(username);
  }
}
