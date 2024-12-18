export const useNamePlaceholder = (name: string) => {
  const strArr = name
    .split(' ')
    .slice(0, 2)
    .map((str) => str.split('').at(0)?.toUpperCase());
  return strArr.join('');
};
