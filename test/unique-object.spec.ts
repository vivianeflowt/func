import uniqueObject from '../src/lib/unique-object';

const array = [
  { name: 'Anissa', color: 'lime' },
  { name: 'Zoe', color: 'violet' },
  { name: 'Cletus', color: 'magenta' },
  { name: 'Cletus', color: 'green' },
  { name: 'Zoe', color: 'violet' },
];

test('uniqueObject', () => {
  expect(uniqueObject(array)).toEqual(
    expect.arrayContaining([
      { name: 'Anissa', color: 'lime' },
      { name: 'Zoe', color: 'violet' },
      { name: 'Cletus', color: 'magenta' },
      { name: 'Cletus', color: 'green' },
    ]),
  );
});
