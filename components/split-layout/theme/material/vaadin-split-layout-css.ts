import { css } from 'lit-element';
import '@vaadin/vaadin-material-styles/color.js';

export const splitLayoutStyles = css`
  [part='splitter'] {
    min-width: 8px;
    min-height: 8px;
    background-color: var(--_material-split-layout-splitter-background-color, #000);
  }

  [part='handle'] {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [part='handle']::after {
    content: '';
    display: block;
    width: 2px;
    height: 24px;
    background-color: var(--material-background-color);
  }

  :host([orientation='vertical']) [part='handle']::after {
    transform: rotate(90deg);
  }
`;
