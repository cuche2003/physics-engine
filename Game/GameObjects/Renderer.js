import { WorldCollisionComponent } from "../Components/CollisionComponent.js";

export const Renderer = (width, height) => {
    const canvas = document.createElement("canvas");
    canvas.height = height;
    canvas.width = width;
    const ctx = canvas.getContext("2d");

    const collision = WorldCollisionComponent();

    const draw = (object) => {
        //ok js overload is just sad. should have used ts
        switch (object.graphics.type) {
            case "circle": {
                ctx.beginPath();
                ctx.arc(object.x, object.y, object.radius, 0, Math.PI*2);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
                break;
            }
        }
    }

    const update = () => {};
    const render = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    
    return {canvas, ctx, draw, collision, update, render};
}