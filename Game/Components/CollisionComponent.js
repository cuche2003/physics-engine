const CollisionComponent = (type) => {

    let resolveCollision = (deltaTime, object, collidable) => {
        switch(collidable.type) {
            case "ball": {}
            case "wall": {}
            case "world": {}
        }
    }

    let update = (deltaTime, object, collidable) => {
        resolveCollision(deltaTime, object, collidable);
    }

    return {type, resolveCollision, update}
}

export const BallCollisionComponent = () => {
    let {type, resolveCollision, update} = CollisionComponent("ball");

    resolveCollision = (deltaTime, ball, collidable) => {
        switch (collidable.collision.type) {
            case "wall": {
                break;
            }
            case "world": {
                const world = collidable.canvas;
                if (ball.x <= ball.radius) {
                    ball.x = ball.radius;
                    ball.veloX = -ball.veloX;
                }
                    
                if (ball.x + ball.radius >= world.width) {
                    ball.x = world.width - ball.radius;
                    ball.veloX = -ball.veloX;
                }

                if (ball.y <= ball.radius) {
                    ball.y = ball.radius;
                    ball.veloY = -ball.veloY;
                }
                    
                if (ball.y + ball.radius >= world.height) {
                    ball.y = world.height - ball.radius;
                    ball.veloY = -ball.veloY;
                }

                
                break;
            }
            default: {
                break;
            }
        }
    }

    update = (deltaTime, ball, collidable) => {
        resolveCollision(deltaTime, ball, collidable);
    }

    return {type, update}
}


export const WorldCollisionComponent = () => {
    let {type, resolveCollision, update} = CollisionComponent("world");

    resolveCollision = (deltaTime, world, collidable) => {
        switch (collidable.type) {
            case "wall": {
                break;
            }
            case "world": {
                break;
            }
            default: {
                break;
            }
        }
    }

    update = (deltaTime, world, collidable) => {
        resolveCollision(deltaTime, world, collidable);
    }

    return {type, update}
}

export const ObstacleCollisionComponent = () => {
    let {type, resolveCollision, update} = CollisionComponent("ball");

    resolveCollision = (deltaTime, obstacle, collidable) => {
        switch (collidable.collision.type) {
            
            case "world": {
                const world = collidable.canvas;
                if (obstacle.x <= obstacle.radius) {
                    obstacle.x = obstacle.radius;
                    obstacle.veloX = -obstacle.veloX;
                }
                    
                if (obstacle.x + obstacle.radius >= world.width) {
                    obstacle.x = world.width - obstacle.radius;
                    obstacle.veloX = -obstacle.veloX;
                }

                if (obstacle.y <= obstacle.radius) {
                    obstacle.y = obstacle.radius;
                    obstacle.veloY = -obstacle.veloY;
                }
                    
                if (obstacle.y + obstacle.radius >= world.height) {
                    obstacle.y = world.height - obstacle.radius;
                    obstacle.veloY = -obstacle.veloY;
                }
            }
            
            case "ball": {

                const ball = collidable;

                const dx = obstacle.x - ball.x;
                const dy = obstacle.y - ball.y;

                const distance = Math.sqrt(dx * dx + dy * dy);


                /*
                const ballNextX = ball.x + ball.veloX;
                const ballNextY = ball.y + ball.veloY;

                const obstacleNextX = obstacle.x + obstacle.veloX;
                const obstacleNextY = obstacle.y + obstacle.veloY;

                const nextDx = obstacleNextX - ballNextX;
                const nextDy = obstacleNextY - ballNextY;

                const nextDistance = Math.sqrt(nextDx * nextDx + nextDy * nextDy);
                */

                

                if (distance < obstacle.radius + ball.radius) {
                    const nx = dx / distance;
                    const ny = dy / distance;

                    const depth = ball.radius + obstacle.radius - distance;
                
                    obstacle.x += nx * depth / 2;
                    obstacle.y += ny * depth / 2;

                    const k = -2 * ((obstacle.veloX - ball.veloX) * nx + (obstacle.veloY - obstacle.veloY) * ny) / (1/ball.mass + 1/obstacle.mass);
                    obstacle.veloX += k * nx / obstacle.mass;
                    obstacle.veloY += k * ny / obstacle.mass;
                } else {     

                    
                }

                break;
            }
            default: {
                break;
            }
        }
    }

    update = (deltaTime, ball, collidable) => {
        resolveCollision(deltaTime, ball, collidable);
    }

    return {type, update}
}
