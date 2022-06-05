const PhysicsComponent = () => {

    let update = (deltaTime, object) => {

    }

    return {update};
}

export const VeloPhysicsComponent = () => {
    let {update} = PhysicsComponent();

    update = (deltaTime, object = {x, y, veloX, veloY, acceX, acceY, mass}) => {
        let speed = Math.sqrt(object.veloX * object.veloX + object.veloY * object.veloY);
        let angle = Math.atan2(object.veloY, object.veloX);

        if(speed > 0.2) {
            speed -= 0.2;
        } else {
            speed = 0;
        }

        object.veloX = Math.cos(angle) * speed;
        object.veloY = Math.sin(angle) * speed;

        object.x += object.veloX * deltaTime * 60 / 1000;
        object.y += object.veloY * deltaTime * 60 / 1000;

        //console.log(object.veloX, object.veloY);
    }

    return {update}
}