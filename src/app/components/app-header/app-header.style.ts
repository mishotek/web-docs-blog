import {css} from "lit-element";

// Language=CSS
export const style = css`
  :host {
    display: flex;
    justify-content: center;
  }
  
  .header {
    height: var(--height-header);
    width: var(--width-content);
  }
  
  .logo {
    background: var(--color-brand-0);
    color: var(--color-text-white-0);
    font-size: var(--font-size-24);
    font-weight: 100;
    padding: var(--space-4);
  }
`;
