import {customElement, html, css, property} from "lit-element";
import {AppElement} from "./app-element";
import './components/app-header/app-header';
import './components/app-main/app-main';
import './components/app-footer/app-footer';

@customElement('app-root')
export class AppRoot extends AppElement {

    static get style() {
        // language=CSS
        return css``;
    }

    public render() {
        // language=HTML
        return html`
            <app-header></app-header>
            <app-main></app-main>
            <app-footer></app-footer>
        `;
    }
}
