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