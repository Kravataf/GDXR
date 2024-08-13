function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve(url);
        script.onerror = (error) => reject(`Failed to load script ${url}: ${error.message}`);
        document.head.appendChild(script);
    });
}

//load the core Babylon.js library
Promise.all([
    loadScript('https://cdn.babylonjs.com/babylon.js')
])
.then(() => {
    console.log("Babylon.js loaded");
    createScene();  //call the function to create the scene
})
.catch(error => {
    console.error('Error loading Babylon.js:', error);
});
