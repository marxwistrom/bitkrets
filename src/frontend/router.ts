import { routes, type pathNames } from "./routes";

const contentElement = document.getElementById("page-content");

function navigateTo(pathname: string) {
  if (Object.keys(routes).includes(pathname)) {
    history.pushState(pathname, "", pathname);
    renderContent(pathname as pathNames);
  } else {
    renderContent("404");
  }
}

async function renderContent(pathname: pathNames) {
  if (contentElement) {
    contentElement.innerHTML = routes[pathname].html();
    await routes[pathname].logic();
  }
}

document.querySelectorAll("a[data-link]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const url = new URL(target.href);
    navigateTo(url.pathname);
  });
});

window.addEventListener("popstate", (e) => {
  if (e.state) {
    renderContent(e.state);
  }
});

navigateTo(window.location.pathname);
