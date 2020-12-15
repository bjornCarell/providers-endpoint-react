import { formatJSON } from './formatJSON';

it('should convert input obj to string', () => {
  const input = {
    market: 'Denmarkt',
    financialInstitutionId: 1234567,
    fields: []
  };
  const output = formatJSON(input);

  expect(typeof output).toBe('string');
});
