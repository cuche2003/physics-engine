import { Renderer } from "./GameObjects/Renderer.js";
import { Ball } from "./GameObjects/Ball.js";
import { World } from "./GameObjects/World.js";
import { CollisionManager } from "./Managers/CollisionManager.js";
import { Obstacle } from "./GameObjects/Obstacle.js";

export const Game = () => {
    const ball = Ball({x: 100, y: 100, speedX: 10, speedY: 10, acceX: 0.02, acceY: 0.02, mass: 3, radius: 40});
    const renderer = Renderer(600, 600);
    const obstacle = Obstacle({x: 400, y: 400, radius: 100, mass: 1});

    const {gameObjects} = World([renderer, ball, obstacle]);
    const collisionManager = CollisionManager(gameObjects);

    const update = (deltaTime) => {

        gameObjects.forEach(gameObject => {
            gameObject.update(deltaTime);
        });
        
        collisionManager.update(deltaTime, gameObjects);

    }

    const render = () => {
        gameObjects.forEach(gameObject => {
            gameObject.render(renderer);
        });
    }

    const tick = (time) => {
        let deltaTime = time - lastTime;

        update(deltaTime);
        render();

        lastTime = time;
        window.requestAnimationFrame(tick);
    }

    let lastTime = 0;
    window.requestAnimationFrame(tick);
    
    return renderer.canvas;
}


