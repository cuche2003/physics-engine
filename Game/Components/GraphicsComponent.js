const GraphicsComponent = (type) => {

    let render = (renderer, object) => {
        renderer.draw(object)
    }

    return {type, render};
}

export const CircleGraphicsComponent = () => GraphicsComponent("circle");