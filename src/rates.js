const knownFamilies = {
  'A': [
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
  ],
  'B': [
    {hour: 17, rate: 12},
    {hour: 18, rate: 12},
    {hour: 19, rate: 12},
    {hour: 20, rate: 12},
    {hour: 21, rate: 12},
    {hour: 22, rate: 8},
    {hour: 23, rate: 8},
    {hour: 0, rate: 16},
    {hour: 1, rate: 16},
    {hour: 2, rate: 16},
    {hour: 3, rate: 16},
  ],
  'C': [
    {hour: 17, rate: 21},
    {hour: 18, rate: 21},
    {hour: 19, rate: 21},
    {hour: 20, rate: 21},
  ]
};

const defaultRates = [
  {hour: 17, rate: 20},
  {hour: 18, rate: 20},
  {hour: 19, rate: 20},
  {hour: 20, rate: 20},
  {hour: 21, rate: 20},
  {hour: 22, rate: 20},
  {hour: 23, rate: 20},
  {hour: 0, rate: 20},
  {hour: 1, rate: 20},
  {hour: 2, rate: 20},
  {hour: 3, rate: 20},
];

export function getRatesForFamily(family) {
  if (knownFamilies.hasOwnProperty(family)) {
    return knownFamilies[family];
  }

  return defaultRates;
}
