import { test, expect } from "vitest";
import {
  validateBlogPostFormData,
  validateEmailAddressStructure,
} from "../../src/frontend/utils/validate";

// Old test...
test("test validate formData is string", () => {
  expect(
    validateBlogPostFormData({
      blogId: "fakeID",
      blogTitle: "asd",
      blogText: "asd",
      submitType: "create",
    })
  ).toBe(true);
});

// With TDD I describe the functinality of my application through tests.
// "I want a function that validates email address structures".
// Then I make the tests pass by writing the corresponding functionality.
test("test returns valid email address", () => {
  const invalidEmailAddressStructure = "asd@asd";
  const validEmailAddressStructure = "asd@asd.se";
  expect(
    // "I want a function with this name to return false for invalid email address"
    validateEmailAddressStructure(invalidEmailAddressStructure)
  ).toBe(false);
  expect(
    // "I want a function with this name to return true for valid email address"
    validateEmailAddressStructure(validEmailAddressStructure)
  ).toBe(true);
});
