import { formString, searchModel } from './searchModel';
import { testModel } from './testModel';

it('replaces underscore and qoutes with space, trim double space, and remove special charachters', () => {
  const input = '"capabilities" : [ "IDENTITY_DATA", "CREDIT_CARDS" ]';
  const output = 'capabilities identity data credit cards';

  expect(formString(input)).toBe(output);
});

it('should return object in array if search text match string in object entries', () => {
  const input = 'Avanza';
  const output = [testModel[2]];
  const providers = searchModel(testModel);

  expect(providers(input)).toEqual(output);
});

it('should return empty array if search text does not match object entries', () => {
  const input = 'se-seb-ob';
  const output = [];
  const providers = searchModel(testModel);

  expect(providers(input)).toEqual(output);
});
