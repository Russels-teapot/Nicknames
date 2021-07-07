import Validator from '../Nicknames';

const validator = new Validator();
test('no-number name', () => {
  expect(validator.validateUsername('Blablabla')).toBeTruthy();
});

test('four-number name', () => {
  expect(validator.validateUsername('Blabla8547bla')).toBeFalsy();
});

test('three-number name', () => {
  expect(validator.validateUsername('blablabl788a')).toBeTruthy();
});

test('first-number name', () => {
  expect(validator.validateUsername('8Blablabla')).toBeFalsy();
});

test('last-number name', () => {
  expect(validator.validateUsername('Blablabla8')).toBeFalsy();
});

test('underscore name', () => {
  expect(validator.validateUsername('B____lablablA')).toBeTruthy();
});

test('dash name', () => {
  expect(validator.validateUsername('Bl----ablabla')).toBeTruthy();
});

test('first-dash name', () => {
  expect(validator.validateUsername('-Blablabla')).toBeFalsy();
});

test('last-dash name', () => {
  expect(validator.validateUsername('Blablabla-')).toBeFalsy();
});

test('first-underscore name', () => {
  expect(validator.validateUsername('_BlablablA')).toBeFalsy();
});

test('last-underscore name', () => {
  expect(validator.validateUsername('BlablablA_')).toBeFalsy();
});
