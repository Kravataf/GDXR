const lib = require('https://cdn.jsdelivr.net/npm/webxr-polyfill@1.2.0/build/webxr-polyfill.min.js')
//webXR api

//get xr sesh
const session = await navigator.xr.requestSession('immersive-vr');

//create webgl content
const gl = canvas.getContext('webgl', { xrCompatible: true });

const referenceSpace = await session.requestReferenceSpace('local-floor');

//renderer
const renderer = new WebXRRenderer(gl, session, referenceSpace);

//render scene
renderer.render();