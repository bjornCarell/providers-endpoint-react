export const providerStatus = status => {
  switch (status) {
    case 'ENABLED':
      return 'E';
    case 'DISABLED':
      return 'D';
    case 'TEMPORARY_DISABLED':
      return 'TD';
    case 'OBSOLETE':
      return 'O';
    default:
      return status.charAt(0);
  }
};
