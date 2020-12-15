import { caseInsensitive } from '../caseInsensitive/caseInsensitive';

export const getProviderByName = providers => name => {
  return providers.filter(
    provider => caseInsensitive(provider.name) === caseInsensitive(name)
  );
};
