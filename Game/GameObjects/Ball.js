import { BallCollisionComponent } from "../Components/CollisionComponent.js";
import { InputComponent } from "../Components/InputComponent.js";
import { CircleGraphicsComponent } from "../Components/GraphicsComponent.js";
import { VeloPhysicsComponent } from "../Components/PhysicsComponent.js";

export const Ball = ({x, y, speedX, speedY, acceX, acceY, mass, radius}) => {
    const graphics = CircleGraphicsComponent();
    const input = InputComponent();
    input.initInput();

    const physics = VeloPhysicsComponent();
    const collision = BallCollisionComponent();

    let veloX = 0;
    let veloY = 0;

    const update = (deltaTime) => {
        input.update(deltaTime, ball);
        physics.update(deltaTime, ball);
    }

    const render = (renderer) => {
        graphics.render(renderer, ball);
    }

    const ball = {x, y, speedX, speedY, veloX, veloY, acceX, acceY, mass, radius, render, update, graphics, collision};

    return ball;
}