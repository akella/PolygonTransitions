import Sketch from './app.js'
import fragment from "./demo1/fragment.glsl";
import vertex from "./demo1/vertex.glsl";
const sketch = new Sketch({
  dom: document.getElementById('container'),
  next: document.querySelector('.nav-next'),
  detail: 50,
  fragment: fragment,
  vertex: vertex,
  offsettop: 0.9,
  ease: "power3.out"
});

