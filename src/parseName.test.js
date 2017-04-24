import test from 'ava';
import parseName from './parseName';

test('empty name', (t) => {
  t.deepEqual(parseName(''), null);
  t.pass();
});

test('unscoped name', (t) => {
  t.deepEqual(parseName('parcel'), {
    fullName: 'parcel',
    scope: null,
    name: 'parcel',
  });
  t.pass();
});

test('scoped name', (t) => {
  t.deepEqual(parseName('@njakob/parcel'), {
    fullName: '@njakob/parcel',
    scope: '@njakob',
    name: 'parcel',
  });
  t.pass();
});
