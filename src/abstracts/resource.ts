export interface IResource {
    replaceHtmlSpecChars: (str: string) => string,
    filterObjectsFromXssAttacks: <T>(objects: T[]) => T[],
    filterObjectFromXssAttacks: <T>(object: T) => T,
}

export type Dictionary = Record<string, string>