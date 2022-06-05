import { ObstacleCollisionComponent } from "../Components/CollisionComponent.js";
import { CircleGraphicsComponent } from "../Components/GraphicsComponent.js"
import { VeloPhysicsComponent } from "../Components/PhysicsComponent.js";

export const Obstacle = ({x, y, radius, mass}) => {
    const graphics = CircleGraphicsComponent();
    const collision = ObstacleCollisionComponent();
    const physics = VeloPhysicsComponent();

    let veloX = 0;
    let veloY = 0;

    let acceX = 0;
    let acceY = 0;
    
    const update = (deltaTime) => {
        physics.update(deltaTime, obstacle);
    }

    const render = (renderer) => {
        graphics.render(renderer, obstacle);
    }

    const obstacle = {x, y, veloX, veloY, acceX, acceY, radius, mass, render, update, graphics, collision};

    return obstacle;
}