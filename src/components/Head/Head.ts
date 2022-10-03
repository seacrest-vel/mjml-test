import { HeadComponent } from "mjml-core";

export class MjHead extends HeadComponent {
    static title: string = "";
    static styles: string[] = [];
    static inserted: string = "";
    
    static setTitle (title: string): typeof this {
        this.title = title;
        return this;
    }

    static setStyles (...styles: string[]): typeof this {
        this.styles = [...this.styles, ...styles];
        return this;
    }

    static insert(insertion: string): typeof this {
        this.inserted = insertion;
        return this;
    }

    static renderMJML(mjml?: string, options?: {} | undefined): string {
        return `
            
        `
    }
}