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