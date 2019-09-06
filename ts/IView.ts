export default interface IView {
    // divMarginLeft: number;
    // divElements: HTMLDivElement[];
    // timerId: number | undefined;
    // domElement: Element | null;
    // logsElement: Element | null;
    // startButton: HTMLElement | null;
    // visualizeButton: HTMLElement | null;
    // testSpeedButton: HTMLElement | null;

    initRender(initArray: number[]): void;
    visualizeSortProcess(listOfTurns: number[][]): void;
    showResult(
        startArray: number[],
        sortMethod: string,
        resultArray: number[],
        actionTime: number
    ): void;
    showSpeedTestResults(resultOfTests: [], testArrayLength: number): void;
    showInfo(info: string, isAlert?: any): void;
}
