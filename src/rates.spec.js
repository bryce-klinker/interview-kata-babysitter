import test from 'ava';
import {expect} from 'chai';
import {getRatesForFamily} from "./rates";

test('Given family A when get rates then $15 per hour before 11:00 PM', t => {
  const rates = getRatesForFamily('A');

  expect(rates).to.deep.include({hour:17, rate: 15});
  expect(rates).to.deep.include({hour:18, rate: 15});
  expect(rates).to.deep.include({hour:19, rate: 15});
  expect(rates).to.deep.include({hour:20, rate: 15});
  expect(rates).to.deep.include({hour:21, rate: 15});
  expect(rates).to.deep.include({hour:22, rate: 15});
});

test('Given family A when get rates then $20 per hour after 11:00 PM', t => {
  const rates = getRatesForFamily('A');

  expect(rates).to.deep.include({hour:23, rate: 20});
  expect(rates).to.deep.include({hour:0, rate: 20});
  expect(rates).to.deep.include({hour:1, rate: 20});
  expect(rates).to.deep.include({hour:2, rate: 20});
  expect(rates).to.deep.include({hour:3, rate: 20});
});

test('Given family B when get rates then $12 per hour before 10:00 PM', t => {
  const rates = getRatesForFamily('B');

  expect(rates).to.deep.include({hour: 17, rate: 12});
  expect(rates).to.deep.include({hour: 18, rate: 12});
  expect(rates).to.deep.include({hour: 19, rate: 12});
  expect(rates).to.deep.include({hour: 20, rate: 12});
  expect(rates).to.deep.include({hour: 21, rate: 12});
});

test('Given family B when get rates then $8 per hour between 10:00 PM and 12:00 AM', t => {
  const rates = getRatesForFamily('B');

  expect(rates).to.deep.include({hour: 22, rate: 8});
  expect(rates).to.deep.include({hour: 23, rate: 8});
});

