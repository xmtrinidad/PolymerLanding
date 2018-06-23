import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import './elements/nav-element/nav-element.js';
import './elements/headline-element/headline-element.js';

/**
 * @customElement
 * @polymer
 */
class LandingPageApp extends PolymerElement {
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'landing-page-app'
      }
    };
  }
  static get template() {
    return html`
      <style>
        :host {
          color: #fff;
        }
      
        h1 {
          color: #fff;
        }
      </style>
      <div class="container">
        <nav-element></nav-element>
        <headline-element></headline-element>
      </div>
    `;

  }
}

window.customElements.define('landing-page-app', LandingPageApp);
