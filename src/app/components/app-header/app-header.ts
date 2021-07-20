import {customElement, html, css, property} from "lit-element";
import {AppElement} from "../../app-element";
import {style} from './app-header.style';

@customElement('app-header')
export class AppHeader extends AppElement {

    static get style() {
        return style;
    }

    public render() {
        // language=HTML
        return html`
            <header class="header display-flex flex-align-center">
                <figure>
                    <a href="/">
                        <h2 class="logo">
                            Web Docs
                        </h2>
                    </a>
                </figure>
            </header>
        `;
    }
}
