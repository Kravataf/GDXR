if (navigator.xr) {
    navigator.xr.requestSession('immersive-vr').then((session) => {
        console.log('started', session);
    }).catch((err) => {
        console.error('failed', err);
    });
} else {
    console.log('not supported');
}