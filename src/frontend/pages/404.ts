function html() {
  return `
        <h1>Page not found</h1>
    `;
}

export function PageNotFound() {
  return {
    html: html,
    logic: () => {},
  };
}
