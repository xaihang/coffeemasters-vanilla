const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        // const url1 = event.target.href;
        const url = event.target.getAttribute("href");
        Router.go(url); // when link is clicked i am passing the value to that function
      });
    });

    // event handler for url changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    // check the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, "", route); // pushState fake the /url
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Menu";
        break;
      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Your Order";
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("h1");
          pageElement.textContent = "Details";
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.id = paramId; // dataset custom library
        }
    }
    if (pageElement) {
      // document.querySelector("main").children[0].remove();  // better way to clear the caches
      // document.querySelector("main").innerHTML = ""; // quick way to remove or clear;
      const cache = document.querySelector("main");
      cache.innerHTML = "";
      // document.querySelector("main").appendChild(pageElement);
      cache.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
