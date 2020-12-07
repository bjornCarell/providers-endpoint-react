const formString = str =>
  JSON.stringify(str)
    .toLowerCase()
    .replace(/[_"]/g, ' ') // replace underscore and qoute with space
    .replace(/[^a-zA-Z ]/g, ''); // remove all special charachters

export const searchModel = model => text => {
  const searchResult = [];

  model.forEach(obj => {
    Object.entries(obj).forEach(entry => {
      if (
        JSON.stringify(entry)
          .toLowerCase()
          .includes(text.toLowerCase().trim())
      ) {
        searchResult.push(obj);
      } else if (
        formString(entry)
          .toLowerCase()
          .includes(text.toLowerCase().trim())
      ) {
        searchResult.push(obj);
      }
    });
  });

  return [...new Set(searchResult)];
};
