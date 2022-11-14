import { injectable } from "inversify";
import { IResource, Dictionary } from "../../abstracts/resource.js";

@injectable()
export default abstract class AbstractResource implements IResource {
    public replaceHtmlSpecChars(str: string): string {
        const dictionary: Dictionary = {
            '/': '&sol;',
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&apos;'
        };
        
        return str.replace(/[/&<>"']/g, specChar => dictionary[specChar]);
    }

    public filterObjectsFromXssAttacks<T>(objects: T[]): T[] {
        return objects.map((object: T) => {
            return this.filterObjectFromXssAttacks(object);
        });
    }

    public filterObjectFromXssAttacks<T>(object: any): T {
        
        for(let key in object) {
            if (typeof object[key] === 'string') {
                object[key] = this.replaceHtmlSpecChars(object[key]);
            }
        }

        return object;
    }
}