function html() {
  return `
        <h1>Login Page</h1>
        <h3>Login to your account:</h3>
        <form style="display:flex;flex-direction:column">
            <label>Email</label>
            <input type="text">
            <label>Password</label>
            <input type="password">
            <button>Login</button>
        </form>
    `;
}

export function LoginPage() {
  return {
    html: html,
    logic: () => {},
  };
}
