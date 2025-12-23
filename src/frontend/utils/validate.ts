import { blogTitleLength } from "../../constants";
import type { BlogPostFormData } from "../../types/bitkrets";

export function validateBlogPostFormData(formData: BlogPostFormData) {
  const blogTitle = formData.blogTitle;
  const blogText = formData.blogText;
  if (typeof blogTitle === "string" || typeof blogText === "string") {
    if (blogTitle.length > 0 && blogText.length > 0) {
      return true;
    }
  }
  return false;
}

// validate email address structure
export function validateEmailAddressStructure(emailAddress: string) {
  const validEmailStructure =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return validEmailStructure.test(emailAddress);
}

// validate password strength
export function validatePasswordStrength(password: string) {
  const validPasswordStrength =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{16,}$/;
  return validPasswordStrength.test(password);
}

// validate blogId
export function validateBlogIdIsNumber(blogId: string) {
  return Number.isInteger(Number(blogId));
}

// validate blogTitle min 15 max 50 characters
export function validateBlogTitleLength(blogTitle: string) {
  return (
    blogTitle.length > blogTitleLength.minLength &&
    blogTitle.length < blogTitleLength.maxLength
  );
}

// validate blogText max 1000 characters
