import { formString } from './searchModel';

it('should replace underscore and qoutes with space', () => {
  const input = '"capabilities" : [ "IDENTITY_DATA", "CREDIT_CARDS" ]';
  const output = 'capabilities identity data credit cards';

  expect(formString(input)).toBe(output);
});
