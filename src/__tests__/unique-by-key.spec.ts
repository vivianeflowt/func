import uniqueByKey from '../lib/unique-by-key';

const array = [
  { name: 'Patricia', color: 'azure' },
  { name: 'Brook', color: 'yellow' },
  { name: 'Giovanna', color: 'purple' },
  { name: 'Patricia', color: 'lavender' },
  { name: 'Lawrence', color: 'yellow' },
];

test('uniqueByKey', () => {
  expect(uniqueByKey('name')(array)).toEqual(
    expect.arrayContaining([
      { name: 'Patricia', color: 'azure' },
      { name: 'Brook', color: 'yellow' },
      { name: 'Giovanna', color: 'purple' },
      { name: 'Lawrence', color: 'yellow' },
    ]),
  );
});
