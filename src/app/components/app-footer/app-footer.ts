import {customElement, html, css, property} from "lit-element";
import {AppElement} from "../../app-element";
import {style} from './app-footer.style';

@customElement('app-footer')
export class AppFooter extends AppElement {

    static get style() {
        return style;
    }

    public render() {
        // language=HTML
        return html`<p>app-footer works!</p>`;
    }
}
