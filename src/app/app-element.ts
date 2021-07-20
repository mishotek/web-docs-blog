import {customElement, css, LitElement} from "lit-element";
import {SHARED_STYLES} from "./shared-styles";

@customElement('app-element')
export class AppElement extends LitElement {

    static get styles() {
        // language=CSS
        return [SHARED_STYLES, this.style];
    }

    static get style() {
        // language=CSS
        return css``;
    }
}
