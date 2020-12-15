export const providerStatus = status => {
  if (status.includes('_')) {
    return status
      .split('_')
      .map(word => word.charAt(0).toUpperCase())
      .join('');
  }
  return status.charAt(0).toUpperCase();
};
