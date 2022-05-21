import removeSpaces from '../lib/remove-spaces';

const str = '  test   text ';

test('removeSpaces', () => {
  expect(removeSpaces(str)).toEqual('testtext');
});
