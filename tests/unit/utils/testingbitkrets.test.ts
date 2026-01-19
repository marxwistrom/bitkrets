import { test, expect } from "vitest";
import {
  validateBlogPostFormData,
  validateEmailAddressStructure,
} from "../../src/frontend/utils/validate";
import { blogPostFormSubmitType } from "../../src/constants";

// Test 1: Valid blog post data
test("validateBlogPostFormData returns true for valid data", () => {
  expect(
    validateBlogPostFormData({
      blogId: "123",
      blogTitle: "My Blog Title",
      blogText: "My blog content",
      submitType: blogPostFormSubmitType.create,
    })
  ).toBe(true);
});

// Test 2: Empty title should be invalid
test("validateBlogPostFormData returns false when title is empty", () => {
  expect(
    validateBlogPostFormData({
      blogId: "123",
      blogTitle: "",
      blogText: "Content",
      submitType: blogPostFormSubmitType.create,
    })
  ).toBe(false);
});

// Test 3: Empty content should be invalid
test("validateBlogPostFormData returns false when content is empty", () => {
  expect(
    validateBlogPostFormData({
      blogId: "123",
      blogTitle: "Title",
      blogText: "",
      submitType: blogPostFormSubmitType.create,
    })
  ).toBe(false);
});

// Test 4: Valid email address
test("validateEmailAddressStructure returns true for valid email", () => {
  expect(validateEmailAddressStructure("user@example.com")).toBe(true);
});

// Test 5: Invalid email without @
test("validateEmailAddressStructure returns false for email without @", () => {
  expect(validateEmailAddressStructure("userdomain.com")).toBe(false);
});

// Test 6: Invalid email without domain extension
test("validateEmailAddressStructure returns false for email without extension", () => {
  expect(validateEmailAddressStructure("user@domain")).toBe(false);
});

// Test 7: Empty email string
test("validateEmailAddressStructure returns false for empty string", () => {
  expect(validateEmailAddressStructure("")).toBe(false);
});

// Test 8: Valid email with numbers
test("validateEmailAddressStructure returns true for email with numbers", () => {
  expect(validateEmailAddressStructure("user123@domain.com")).toBe(true);
});

// Test 9: Email with dot in local part
test("validateEmailAddressStructure returns true for email with dot", () => {
  expect(validateEmailAddressStructure("john.doe@example.com")).toBe(true);
});

// Test 10: Check blog post submit type create
test("blogPostFormSubmitType.create should equal 'create'", () => {
  expect(blogPostFormSubmitType.create).toBe("create");
});

// Test 11: Check blog post submit type edit
test("blogPostFormSubmitType.edit should equal 'edit'", () => {
  expect(blogPostFormSubmitType.edit).toBe("edit");
});

// Test 12: Check blog post submit type delete
test("blogPostFormSubmitType.delete should equal 'delete'", () => {
  expect(blogPostFormSubmitType.delete).toBe("delete");
});

// Test 13: Valid blog post for create
test("validateBlogPostFormData works with create submit type", () => {
  expect(
    validateBlogPostFormData({
      blogId: "new",
      blogTitle: "New Blog",
      blogText: "New Content",
      submitType: blogPostFormSubmitType.create,
    })
  ).toBe(true);
});

// Test 14: Valid blog post for edit
test("validateBlogPostFormData works with edit submit type", () => {
  expect(
    validateBlogPostFormData({
      blogId: "123",
      blogTitle: "Updated Title",
      blogText: "Updated Content",
      submitType: blogPostFormSubmitType.edit,
    })
  ).toBe(true);
});

// Test 15: Valid blog post for delete
test("validateBlogPostFormData works with delete submit type", () => {
  expect(
    validateBlogPostFormData({
      blogId: "123",
      blogTitle: "Title",
      blogText: "Content",
      submitType: blogPostFormSubmitType.delete,
    })
  ).toBe(true);
});

// Test 16: Email with underscore
test("validateEmailAddressStructure returns true for email with underscore", () => {
  expect(validateEmailAddressStructure("user_name@example.com")).toBe(true);
});

// Test 17: Email with plus sign
test("validateEmailAddressStructure returns true for email with plus sign", () => {
  expect(validateEmailAddressStructure("user+tag@example.com")).toBe(true);
});

// Test 18: Email with hyphen in domain
test("validateEmailAddressStructure returns true for email with hyphen in domain", () => {
  expect(validateEmailAddressStructure("user@my-domain.com")).toBe(true);
});

// Test 19: Both title and content empty
test("validateBlogPostFormData returns false when both title and content are empty", () => {
  expect(
    validateBlogPostFormData({
      blogId: "123",
      blogTitle: "",
      blogText: "",
      submitType: blogPostFormSubmitType.create,
    })
  ).toBe(false);
});

// Test 20: Long valid blog post
test("validateBlogPostFormData works with long text", () => {
  expect(
    validateBlogPostFormData({
      blogId: "123",
      blogTitle: "A Very Long Title That Goes On And On",
      blogText:
        "This is a very long blog post content that contains lots of text and information.",
      submitType: blogPostFormSubmitType.create,
    })
  ).toBe(true);
});
