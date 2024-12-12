document.addEventListener("DOMContentLoaded", function () {
 
    const appElement = document.getElementById("app");


    const greeting = appElement.getAttribute("data-greeting");


    appElement.innerHTML = `<h1>Hello, ${greeting}!</h1>`;
});
