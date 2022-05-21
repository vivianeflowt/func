import randomFromList from '../lib/random-from-list';

const array = [1, 2, 3, 4, 5];
test('randomFromList', () => {
  expect(array).toContain(randomFromList(array));
});
