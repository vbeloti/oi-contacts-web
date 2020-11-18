const normalize = (value: string) => value
  ?.replace(/-/g, '')
  ?.replace(/\./g, '')
  ?.replace(/\//g, '')
  ?.replace(/\(/g, '')
  ?.replace(/\)/g, '');

export default normalize;
