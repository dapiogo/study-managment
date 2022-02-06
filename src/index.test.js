const add = (a, b) => a + b;

const users = ['dawid', 'roman', 'basia'];

it('Add two values', () => {
  expect(add(2, 5)).toBe(7);
});

it('Array contain dawid and not contain tomek', () => {
  expect(users).toContain('dawid');
  expect(users).not.toContain('tomek');
});
