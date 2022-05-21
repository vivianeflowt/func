import unaccented from '../lib/unaccented';

test('unaccented', () => {
  expect(unaccented('Ábôà')).toEqual('Aboa');
});
