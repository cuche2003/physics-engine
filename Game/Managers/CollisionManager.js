export const CollisionManager = () => {
    const update = (deltaTime, gameObjects) => {
        gameObjects.forEach(gameObject => {
            gameObjects.forEach(otherGameObject => {
                if (gameObject != otherGameObject) {
                    gameObject.collision.update(deltaTime, gameObject, otherGameObject);
                }
            })
        });
    }

    return {update};
}