export const useIsDecember = (): boolean => {
  const isDecember = new Date().getMonth() === 11; 
  return isDecember;
};
