# Polymer Landing

This is just a basic landing page using Polymer.  This Readme will contain any helpful code snippets and relevant links as I learn Polymer

## Polymer CLI

Like Angular, Polymer has a CLI for creating projects.

Official documentation: <https://www.polymer-project.org/1.0/docs/tools/polymer-cli>

* Use ```npm install -g polymer-cli``` to install the Polymer CLI
* Create a project with by first creating a new directory then, inside that directory, run the ```polymer init``` command
  * A prompt will appear to choose a starter template

---

## Create a View

The template for building a new view is as follows:

```js
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class MyNewView extends PolymerElement {
  static get template() {
    return html`
      <style>
        <!-- Add styles for view here -->
      </style>

      <!-- Add HTML here -->
    `;
  }
  static get properties() {
    /**
     * Return property object
     **/
  }
}

customElements.define('my-new-view', MyNewView);
```

The view can then be imported into a parent view or wherever the view is being used

---

## dom-if

Polymer uses *dom-if* in the same way that Angular uses **ngIf*.  In Polymer, the following import is required before *dom-if* can start to be used:

```import '@polymer/polymer/lib/elements/dom-if.js';```

Once that is imported a ```<template></template>``` tag is used along with an *is* attribute that identifies the template as a *dom-if* template:

```js
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
```

In the above snippet, *dom-if* is used to display either a link and a regular button depending on if the *navItem* is a button or not. 

## dom-repeat

Angular's **ngFor* equivalent in Polymer is *dom-repeat* and works similar to how *dom-if* works in the previous section.  First, *dom-repeat* needs to be imported:

```import '@polymer/polymer/lib/elements/dom-repeat.js';```

```html
<template is="dom-repeat" items="{{navItems}}" as="navItem">
  <a href="#">[[navItem.name]]</a>
</template>
```     

In the above snippet, the *is* attribute sets the template to *dom-repeat*, the *items* attribute is set to the property defined in the *get properties()* method defined within the view.  Finally, the *as* attribute sets an alias for *item*.  By default, *item* is set as the iterator.

---