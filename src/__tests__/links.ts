import { transformLinks } from '../transformLinks';

it("should transform valid links", () => {
  const input = "Check out this link: <https://example.com>";
  const expectedOutput =
    "Check out this link: [https://example.com](https://example.com)";
  expect(transformLinks(input)).toEqual(expectedOutput);
});

it("should not transform <boolean>", () => {
  const input = "This is a boolean: <boolean>";
  expect(transformLinks(input)).toEqual(input);
});
