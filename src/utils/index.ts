export const isTrue = (value: unknown): boolean =>
  value === 0 ? true : !!value;

export const cleanObject = (obj: any) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (!isTrue(value)) {
      delete result[key];
    }
  });
  return result;
};
