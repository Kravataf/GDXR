if (navigator.xr) {
    navigator.xr.requestSession('immersive-vr')
    .then((session) => {
        console.log("VR session started successfully.");
        // Proceed with using the session
    })
    .catch((error) => {
        if (error.name === 'NotFoundError') {
            console.log("No VR device is connected.");
        } else {
            console.error("Error starting VR session:", error);
        }
    });
} else {
    console.log("WebXR is not supported in this browser.");
}
