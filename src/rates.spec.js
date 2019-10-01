import test from 'ava';
import {getRatesForFamily} from "./rates";

test('Given family A when get rates then $15 per hour before 11:00 PM', t => {
  const rates = getRatesForFamily('A');
  t.deepEqual({ hour: 17, rate: 15 }, rates[0]);
});
