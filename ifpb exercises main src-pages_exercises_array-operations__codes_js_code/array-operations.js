export function sum(array) {
  if (!Array.isArray(array)) return NaN;
  return array.reduce((acc, val) => acc + val, 0);
}

export function sumOdds(array) {
  if (!Array.isArray(array)) return NaN;
  return array.filter(num => num % 2 !== 0).reduce((acc, val) => acc + val, 0);
}

export function product(array) {
  if (!Array.isArray(array)) return NaN;
  return array.reduce((acc, val) => acc * val, 1);
}
