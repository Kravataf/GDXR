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
//attach the startXRSession function to a user interaction event!!
const startButton = document.createElement('button');
startButton.textContent = 'Start XR Session';
startButton.style.position = 'absolute';
startButton.style.top = '10px';
startButton.style.left = '10px';
startButton.addEventListener('click', () => {
    startXRSession();
});
document.body.appendChild(startButton);
//webxr doesnt work bc of insecure connection or whatever
if (!location.protocol.includes('https')) {
    alert(
      "ur connection is not secure and WebXR wont work!! please enable the 'Insecure origins treated as secure' flag in Chrome (chrome://flags)."
    );
  }

// Function to access the scene renderer and set up XR
function setupXR(session) {
    // Access the renderer of the runtime scene
    const renderer = runtimeScene.getRenderer();

    // Ensure it supports Three.js
    const threeRenderer = renderer.getThreeRenderer ? renderer.getThreeRenderer() : null;

    if (!threeRenderer) {
        console.error("Three.js renderer not found. Ensure you're using GDevelop's 3D renderer.");
        return;
    }

    // Set the renderer to use the WebXR session
    threeRenderer.xr.enabled = true;
    threeRenderer.xr.setSession(session);

    // Access the default Three.js camera from the scene
    const camera = runtimeScene.getCamera ? runtimeScene.getCamera() : null;

    if (!camera) {
        console.error("Camera not found in the scene.");
        return;
    }

    // Update the camera to XR
    threeRenderer.setAnimationLoop(() => {
        // Render your scene using the camera and XR renderer
        threeRenderer.render(runtimeScene.getThreeScene(), camera);
    });

    console.log("XR camera and renderer successfully initialized.");
}