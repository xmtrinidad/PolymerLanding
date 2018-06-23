import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';


export class NavElement extends PolymerElement {
  static get properties() {
    return {
      mobileMenuActive: {
        type: Boolean,
        value() {
          return false;
        }
      },
      navItems: {
        type: Array,
        value() {
          return [
            { name: 'Particulars', isButton: false },
            { name: 'Business', isButton: false },
            { name: 'App', isButton: false },
            { name: 'Sign In', isButton: true },
            { name: 'Sign Up', isButton: true },
          ];
        }
      }
    };
  }
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 12px 0;
        }
      
        /** Remove default padding from nav element **/
      
        nav {
          padding: 0;
        }
      
        .Nav__list {
          list-style: none;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          padding: 0;
          margin: 0;
        }
      
        .Nav__list-item {
          margin: 7px 0;
      
        }
      
        .Nav__list-item-link {
          color: #fff;
        }
      
        .Nav__list-item-btn {
          border-radius: 14px;
        }
      
        @media (min-width: 768px) {
          .Nav__menu-icon {
            display: none;
          }
      
          .Nav__list {
            flex-direction: row;
          }
        }
      </style>
      <nav class="container Nav">
        <div class="Nav__menu-icon">
          <paper-icon-button icon="menu" on-click="onMobileMenuClick">Test</paper-icon-button>
        </div>
        <!-- Template: Hide/Show Nav Menu -->
        <template is="dom-if" if="{{mobileMenuActive}}">
      
          <ul class="Nav__list">
            <!-- Template: Iterate Over Nav Items -->
            <template is="dom-repeat" items="{{navItems}}" as="navItem">
      
              <li class="Nav__list-item">
      
                <!-- Template: Show Link if item isn't a button -->
                <template is="dom-if" if="{{!navItem.isButton}}">
                  <a href="#" class="Nav__list-item-link">[[navItem.name]]</a>
                </template>
                <!-- /Template: Show Link if item isn't a button -->
      
                <!-- Template: Show button if item is a button -->
                <template is="dom-if" if="{{navItem.isButton}}">
                  <button class="Nav__list-item-btn btn btn-primary">[[navItem.name]]</button>
                </template>
                <!-- /Template: Show button if item is a button -->
      
              </li>
      
            </template>
            <!-- /Template: Iterate Over Nav Items -->
          </ul>
      
        </template>
        <!-- /Template: Hide/Show Nav Menu -->
      </nav>
    `;
  }
  onMobileMenuClick() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }
}

customElements.define('nav-element', NavElement);