const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/webxr-polyfill@1.2.0/build/webxr-polyfill.min.js';
document.head.appendChild(script);

async function enterVRMode() {
    const session = await navigator.xr.requestSession('immersive-vr');
    const gl = canvas.getContext('webgl', { xrCompatible: true });
    const referenceSpace = await session.requestReferenceSpace('local-floor');
    const renderer = new WebXRRenderer(gl, session, referenceSpace);
    renderer.render();
}

enterVRMode(); //call func to start vr mode

const canvas = document.getElementById('canvas id here?'); //define canvas or smth