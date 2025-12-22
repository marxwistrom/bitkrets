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

export function validateEmailAddressStructure(emailAddress: string) {
  // validate email address structure
  const validEmailStructure =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return validEmailStructure.test(emailAddress);
}
