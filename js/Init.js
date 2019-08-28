window.addEventListener('load', () => {
    const myArray = new SmartArray();
    const viewport = new View();
    const mainController = new MainController(myArray, viewport);
});
