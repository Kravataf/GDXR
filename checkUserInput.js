async function userInteractionCondition(runtimeScene) {
    //call waitForUserInput and pause execution until resolved
    await waitForUserInput();
    runtimeScene.getVariables().get("userInteracted").setNumber(1); //set scene var to indicate interaction
}
function waitForUserEvent(eventType = "click") {
    return new Promise((resolve) => {
        const listener = () => {
            resolve();
            window.removeEventListener(eventType, listener);
        };
        window.addEventListener(eventType, listener);
    });
}