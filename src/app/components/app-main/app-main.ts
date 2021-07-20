import {customElement, html, css, property} from "lit-element";
import {AppElement} from "../../app-element";
import {style} from './app-main.style';

@customElement('app-main')
export class AppMain extends AppElement {

    static get style() {
        return style;
    }

    public render() {
        // language=HTML
        return html`
            <main class="main">
            
            </main>
        `;
    }
}
