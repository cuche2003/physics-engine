export const InputComponent = () => {

    const state = {
        leftPressed : false, 
        upPressed : false, 
        rightPressed : false, 
        downPressed : false,
    }

    const update = (deltaTime, object = {x, y, speedX, speedY, veloX, veloY, acceX, acceY}) => {
        if (state.leftPressed) object.veloX -= object.mass * object.acceX * deltaTime * 60 / 100;
        if (state.rightPressed) object.veloX += object.mass * object.acceX * deltaTime * 60 / 100;
        
        if (state.upPressed) object.veloY -= object.mass * object.acceY * deltaTime * 60 / 100;
        if (state.downPressed) object.veloY += object.mass * object.acceY * deltaTime * 60 / 100;        
    }

    const keydownHandler = (e) => {
        switch(e.key) {
            case "ArrowLeft": {
                state.leftPressed = true;
                break;
            };
            case "ArrowUp": {
                state.upPressed = true;
                break;
            };
            case "ArrowRight": {
                state.rightPressed = true;
                break;
            };
            case "ArrowDown": {
                state.downPressed = true;
                break;
            };
        }
    }

    const keyupHandler = (e) => {
        switch(e.key) {
            case "ArrowLeft": {
                state.leftPressed = false;
                break;
            };
            case "ArrowUp": {
                state.upPressed = false;
                break;
            };
            case "ArrowRight": {
                state.rightPressed = false;
                break;
            };
            case "ArrowDown": {
                state.downPressed = false;
                break;
            };
        }
    }

    const initInput = () => {
        document.addEventListener("keydown", keydownHandler);
        document.addEventListener("keyup", keyupHandler);
    }

    const clearInput = () => {
        document.removeEventListener("keydown", keydownHandler);
        document.removeEventListener("keyup", keyupHandler);
    }

    return {initInput, clearInput, update}
}