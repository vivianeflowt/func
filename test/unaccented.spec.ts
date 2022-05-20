import unaccented from '../src/lib/unaccented';

test('unaccented', () => {
  expect(unaccented('Ábôà')).toEqual('Aboa');
});
