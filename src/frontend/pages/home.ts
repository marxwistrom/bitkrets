function html() {
  return `
        <h1>Home Page</h1>
        <div>Home page content :)</div>
    `;
}

export function HomePage() {
  return {
    html: html,
    logic: () => {},
  };
}
