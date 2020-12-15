export const formatJSON = (obj, space = 2) => {
  let number;

  if (typeof space !== 'number') {
    number = parseInt(space, 10);
    return JSON.stringify(obj, null, number);
  }
  return JSON.stringify(obj, null, space);
};
