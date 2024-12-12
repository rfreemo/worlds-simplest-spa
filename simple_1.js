export function initSPA(selector) {
    const appElement = document.querySelector(selector);
    const greeting = appElement.getAttribute("data-greeting");
    appElement.innerHTML = `<h1>Hello, ${greeting}!</h1>`;
}

// Bootstrap logic
document.addEventListener("DOMContentLoaded", () => {
    initSPA("#app");
});
