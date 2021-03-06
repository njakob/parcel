import test from 'ava';
import parseMember from './parseMember';

test('empty name', (t) => {
  t.deepEqual(parseMember(''), null);
  t.pass();
});

test('name only', (t) => {
  t.deepEqual(parseMember('John'), {
    name: 'John',
    email: null,
    url: null,
  });
  t.pass();
});

test('name with email', (t) => {
  t.deepEqual(parseMember('John <john@nobody.test>'), {
    name: 'John',
    email: 'john@nobody.test',
    url: null,
  });
  t.pass();
});

test('name with email and url', (t) => {
  t.deepEqual(parseMember('John <john@nobody.test> (http://hello.test)'), {
    name: 'John',
    email: 'john@nobody.test',
    url: 'http://hello.test',
  });
  t.pass();
});
