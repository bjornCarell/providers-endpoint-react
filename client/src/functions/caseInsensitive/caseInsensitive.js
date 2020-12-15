export const caseInsensitive = string => {
  if (typeof string !== 'string') return String(string).toLowerCase();
  return string.toLowerCase();
};
