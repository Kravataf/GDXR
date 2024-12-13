//import some stuff importing it like this wont work but idk how to do 
// it since gdev already has threejs so im not sure if its a good idea to import it again..
// import * as THREE from 'https://cdn.jsdelivr.net/npm/three.js@0.77.1/shim.min.js'; //i  hope this works

loadTHREEJS('https://cdn.jsdelivr.net/npm/three@0.77.1/build/three.min.js', function() {});


import { VRButton } from 'three/addons/webxr/VRButton.js';
async function startXRSession() {
    if (navigator.xr) {
        try {
            const session = await navigator.xr.requestSession('immersive-vr');
            console.log('webxr session started:', session);
            renderer.xr.enabled = true;
        } catch (err) {
            console.error('failed to start:', err);
        }
    } else {
        console.log('not supported');
    }
}
renderer.setAnimationLoop( function () {

	renderer.render( scene, camera );

} );
//attach the startXRSession function to a user interaction event!!
// const startButton = document.createElement('button');
// startButton.textContent = 'Start XR Session';
// startButton.style.position = 'absolute';
// startButton.style.top = '10px';
// startButton.style.left = '10px';
// startButton.addEventListener('click', () => {
//     startXRSession();
// });
// document.body.appendChild(startButton);

document.body.appendChild( VRButton.createButton( renderer ) ); //button from the docs https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content

//webxr doesnt work bc of insecure connection or whatever
if (!location.protocol.includes('https')) {
    alert(
      "ur connection is not secure and WebXR wont work!! please enable the 'Insecure origins treated as secure' flag in Chrome (chrome://flags)."
    );
  }