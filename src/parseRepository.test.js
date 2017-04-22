import test from 'ava';
import parseRepository from './parseRepository';

test('missing', (t) => {
  t.deepEqual(parseRepository(undefined), null);
  t.pass();
});

test('empty', (t) => {
  t.deepEqual(parseRepository(''), null);
  t.pass();
});

test('with object', (t) => {
  t.deepEqual(parseRepository({
    type: 'git',
    url: 'git://github.com/njakob/parcel.git',
  }), {
    type: 'git',
    url: 'git://github.com/njakob/parcel.git',
  });
  t.pass();
});

test('with git string', (t) => {
  t.deepEqual(parseRepository('bitbucket:njakob/test'), {
    type: 'git',
    url: 'https://bitbucket.com/njakob/test.git',
  });
  t.pass();
});

test('with github string', (t) => {
  t.deepEqual(parseRepository('njakob/rainbow'), {
    type: 'git',
    url: 'https://github.com/njakob/rainbow.git',
  });
  t.pass();
});
