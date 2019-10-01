import test from 'ava';
import {getRatesForFamily} from "./rates";

test('Given family A when get rates then $15 per hour before 11:00 PM', t => {
  const rates = getRatesForFamily('A');
  t.deepEqual({ hour: 17, rate: 15 }, rates[0]);
  t.deepEqual({ hour: 18, rate: 15 }, rates[1]);
  t.deepEqual({ hour: 19, rate: 15 }, rates[2]);
  t.deepEqual({ hour: 20, rate: 15 }, rates[3]);
  t.deepEqual({ hour: 21, rate: 15 }, rates[4]);
  t.deepEqual({ hour: 22, rate: 15 }, rates[5]);
});

test('Given family A when get rates then $20 per hour after 11:00 PM', t => {
  const rates = getRatesForFamily('A');
  t.deepEqual({ hour: 23, rate: 20 }, rates[6]);
  t.deepEqual({ hour: 0, rate: 20 }, rates[7]);
  t.deepEqual({ hour: 1, rate: 20 }, rates[8]);
  t.deepEqual({ hour: 2, rate: 20 }, rates[9]);
  t.deepEqual({ hour: 3, rate: 20 }, rates[10]);
});

