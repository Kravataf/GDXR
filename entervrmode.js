const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/webxr-polyfill@1.2.0/build/webxr-polyfill.min.js';
document.head.appendChild(script);

//webXR lib

//get xr sesh
const session = await navigator.xr.requestSession('immersive-vr');

//create webgl content
const gl = canvas.getContext('webgl', { xrCompatible: true });

const referenceSpace = await session.requestReferenceSpace('local-floor');

//renderer
const renderer = new WebXRRenderer(gl, session, referenceSpace);

//render scene
renderer.render();