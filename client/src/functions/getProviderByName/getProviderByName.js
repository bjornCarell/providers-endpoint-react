export const getProviderByName = providers => name => {
  return providers.filter(provider => provider.name === name);
};
