export function getRatesForFamily(family) {
  if (family === 'B') {
    return [
      {hour: 17, rate: 12},
      {hour: 18, rate: 12},
      {hour: 19, rate: 12},
      {hour: 20, rate: 12},
      {hour: 21, rate: 12}
    ];
  }

  return [
    {hour: 17, rate: 15},
    {hour: 18, rate: 15},
    {hour: 19, rate: 15},
    {hour: 20, rate: 15},
    {hour: 21, rate: 15},
    {hour: 22, rate: 15},
    {hour: 23, rate: 20},
    {hour: 0, rate: 20},
    {hour: 1, rate: 20},
    {hour: 2, rate: 20},
    {hour: 3, rate: 20},
  ];
}
