import cm from "./component_map";

import("../node_modules/constellation-core/dist/constellation-core.js").then((mod) => {
  import("../node_modules/constellation-nebula/dist/react_root.js").then(() => {
    console.log("nebula", mod);
  });
  console.log("core", mod);
});

fetch('http://localhost:5001/components', {
  method: 'GET'
}).then(() => console.log('sucess'));

class PegaComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Hello world 1234</h1>`;
    console.log("att", this.getAttribute("data-config"));
  }
}

customElements.define("pega-bootstrap-component", PegaComponent);