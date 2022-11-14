export interface IView {
    getTemplate: () => string,
    setTemplate: (template: string) => void,
    setData: <T>(data: T) => this,
    getData: <T>() => T | null,
}