const API = {
  url: "/data/menu.json",
  fetchMenu: async () => {
    const result = await fetch(API.url); // promise base
    return await result.json(); // return back to whoever is calling api
  },
};

export default API;
