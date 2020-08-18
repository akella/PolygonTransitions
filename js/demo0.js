import Sketch from './app.js'
import fragment from "./demo0/fragment.glsl";
import vertex from "./demo0/vertex.glsl";

const sketch = new Sketch({
  dom: document.getElementById('container'),
  next: document.querySelector('.nav-next'),
  detail: 10,
  duration: 3,
  fragment: fragment,
  vertex: vertex,
  offsettop: 0.,
  ease: "power3.out"
});

