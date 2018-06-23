import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

export class HeadlineElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        .Headline {
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 70vh;
        }
      
        .Headline__btns {
          display: flex;
          justify-content: center;
        }
      
        .Headline__btn {
          border-radius: 17px;
          margin-right: 7px;
        }
      
        @media (min-width: 768px) {
          .Headline {
            text-align: left;
          }
      
          .Headline__btns {
            justify-content: start;
          }
        }
      </style>
      <div class="Headline">
        <div>
          <h1 class="Headline__title">Lorem ipsum dolor sit amet.</h1>
          <p class="Headline__subtitle">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div class="Headline__btns">
          <button class="btn btn-primary Headline__btn">Get Started</button>
          <button class="btn btn-primary Headline__btn">Sign Up</button>
        </div>
      </div>
    `;
  }
}

customElements.define('headline-element', HeadlineElement);