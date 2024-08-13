function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve(url);
        script.onerror = (error) => reject(`Failed to load script ${url}: ${error.message}`);
        document.head.appendChild(script);
    });
}

// Load the core Babylon.js library
Promise.all([
    loadScript('https://cdn.babylonjs.com/babylon.js')
])
.then(() => {
    console.log("Babylon.js loaded");
    // Now that Babylon.js is loaded, define and call createScene
    createScene();  // Ensure createScene is defined in the same scope or globally
})
.catch(error => {
    console.error('Error loading Babylon.js:', error);
});

// Define createScene function
async function createScene() {
    // Use a more general selector or inspect the canvas manually
    const canvas = document.querySelector('canvas') || document.getElementsByTagName('canvas')[0];
    
    if (!canvas) {
        console.error('Canvas element not found');
        console.log('All canvas elements:', document.querySelectorAll('canvas'));
        return;
    }
    
    const engine = new BABYLON.Engine(canvas, true);

    // Create a basic scene
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    const sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
    sphere.position.y = 1;

    const env = scene.createDefaultEnvironment();

    // Initialize WebXR
    const xr = await scene.createDefaultXRExperienceAsync({
        floorMeshes: [env.ground]
    });

    // Start the render loop
    engine.runRenderLoop(() => {
        scene.render();
    });

    window.addEventListener('resize', function() {
        engine.resize();
    });

    // Enter VR mode
    xr.baseExperience.enterXRAsync('immersive-vr', 'local').then(() => {
        console.log('VR mode started');
    }).catch(error => {
        console.error('Failed to enter VR mode:', error);
    });
}

//this actually renders the ball >:3