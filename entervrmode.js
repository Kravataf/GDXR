const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/webxr-polyfill@1.2.0/build/webxr-polyfill.min.js';
script.onload = async function() {
    const canvas = document.getElementById('vrCanvas');
    
    if (navigator.xr) {
        try {
            const session = await navigator.xr.requestSession('immersive-vr');
            const gl = canvas.getContext('webgl', { xrCompatible: true });
            const referenceSpace = await session.requestReferenceSpace('local-floor');
            const renderer = new WebXRRenderer(gl, session, referenceSpace);
            renderer.render();
        } catch (error) {
            console.error('Failed to enter VR mode:', error);
        }
    } else {
        console.error('WebXR not supported');
    }
};
document.head.appendChild(script);
