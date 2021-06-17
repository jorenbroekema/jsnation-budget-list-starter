import { LitElement, html } from "lit";

class FooComponent extends LitElement {
  static get properties() {
    return {
      counter: {
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.counter = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.counterInterval = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.counterInterval);
  }

  render() {
    return html`
      <h2>Hello, Foo! :)</h2>
      <p>This component has been live for ${this.counter} seconds</p>
    `;
  }
}

customElements.define("foo-component", FooComponent);

export default `<foo-component></foo-component>`;
