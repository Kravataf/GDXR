async function startXRSession() {
    if (navigator.xr) {
        try {
            const session = await navigator.xr.requestSession('immersive-vr');
            console.log('webxr session started:', session);
        } catch (err) {
            console.error('failed to start:', err);
        }
    } else {
        console.log('not supported');
    }
}