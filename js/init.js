window.addEventListener('load', () => {
    const myArray = new SmartArray();
    const viewport = new View(myArray);
    const mainController = new MainController(myArray, viewport);
});
