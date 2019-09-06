export default interface IView {
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
