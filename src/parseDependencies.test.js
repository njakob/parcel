import test from 'ava';
import parseDependencies from './parseDependencies';

test('without dependency', (t) => {
  t.deepEqual(parseDependencies({}), []);
  t.pass();
});

test('with unscoped dependency', (t) => {
  t.deepEqual(parseDependencies({
    'eslint-config-njakob': '^4.1.0',
  }), [
    { name: { name: 'eslint-config-njakob', scope: null }, version: '^4.1.0' }
  ]);
  t.pass();
});

test('with scoped dependency', (t) => {
  t.deepEqual(parseDependencies({
    '@njakob/rainbow': '^1.0.0',
  }), [
    { name: { name: 'rainbow', scope: '@njakob' }, version: '^1.0.0' }
  ]);
  t.pass();
});

test('with multiple dependencies', (t) => {
  t.deepEqual(parseDependencies({
    'eslint-config-njakob': '^4.1.0',
    '@njakob/rainbow': '^1.0.0',
  }), [
    { name: { name: 'eslint-config-njakob', scope: null }, version: '^4.1.0' },
    { name: { name: 'rainbow', scope: '@njakob' }, version: '^1.0.0' }
  ]);
  t.pass();
});
