import Sketch from './app.js'
import fragment from "./demo4/fragment.glsl";
import vertex from "./demo4/vertex.glsl";

const sketch = new Sketch({
  dom: document.getElementById('container'),
  next: document.querySelector('.nav-next'),
  detail: 100,
  fragment: fragment,
  vertex: vertex,
  offsettop: .5,
});

