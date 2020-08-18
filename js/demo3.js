import Sketch from './app.js'
import fragment from "./demo3/fragment.glsl";
import vertex from "./demo3/vertex.glsl";

const sketch = new Sketch({
  dom: document.getElementById('container'),
  next: document.querySelector('.nav-next'),
  detail: 20,
  fragment: fragment,
  vertex: vertex,
  offsettop: 0.4,
  
});

