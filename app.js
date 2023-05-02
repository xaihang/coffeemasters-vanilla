
// it's better to wait for the event for manipulation 
window.addEventListener("DOMContentLoaded", () => {
    let nav = document.querySelector("nav"); 
    console.log(nav);
    nav.innerHTML = `
    <h2>Hello DOM</h2>
    <p>This is html within a js string</p>
    `
});

// DOMContentLoaded: initialize ASAP; happens before rendering

window.addEventListener("DOMContentLoaded", event => {

})