import test from 'ava';
import { expect } from 'chai';
import {getRatesForFamily} from "./rates";

test('Given family A when get rates then $15 per hour before 11:00 PM', t => {
  const rates = getRatesForFamily('A');
  expect(rates).to.contains({ hour: 17, rate: 15 })
});
