import * as React from "react";
import { point, setupCanvas } from "../util/canvas";
import { randomInt, TAU, randomElement } from "../util/math";
import { mkSimplexNoise, SimplexNoise } from "@spissvinkel/simplex-noise";

// Inspired from https://github.com/FyraLabs/homepage to make a component version

interface Particle {
    x: number;
    y: number;
    color: string;
};

let noiseGen = mkSimplexNoise(Math.random);
const noiseSc = 0.01 / 2;

const draw = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    particles: Particle[],
    frame: number
) => {
    if (frame % 4 == 0) {
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    ctx.globalAlpha = 1;

    particles.forEach((p) => {
        ctx.fillStyle = p.color;
        
        const noise = noiseGen.noise3D(
            p.x * noiseSc,
            p.y * noiseSc,
            frame * noiseSc * noiseSc
        );

        const a = noise * TAU;
        p.x += Math.cos(a) * 1.5;
        p.y += Math.sin(a) * 1.5;

        // If particle is outside of canvas, randomize it's position
        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
            p.x = randomInt(canvas.width);
            p.y = randomInt(canvas.height);
        }

        point(ctx, p.x, p.y, 1);
    });

    requestAnimationFrame(() => draw(ctx, canvas, particles, frame + 1));
};

const initCanvas = (canvas: HTMLCanvasElement, color?: string[]) => {
    const ctx = setupCanvas(canvas);

    const particles: Particle[] = Array(1000)
        .fill(0)
        .map(() => ({
            x: randomInt(canvas.width),
            y: randomInt(canvas.height),
            color: randomElement(color || [
                "#468464",
                "#122",
                "#223",
                "#122",
                "#468464",
            ]),
        }));

    draw(ctx, canvas, particles, 0);
};

interface FlowFieldProps {
    style?: React.CSSProperties;
    className?: string;
    color?: string[];
};

const FlowField = ({ style, className, color }: FlowFieldProps) => {
    const canvas = React.useRef<HTMLCanvasElement>(null) as React.MutableRefObject<HTMLCanvasElement>;
    
    const canvasOnClick = () => {
        noiseGen = mkSimplexNoise(Math.random);
    };
    
    const windowResize = () => {
        setupCanvas(canvas.current);
    };

    React.useEffect(() => {
        if (canvas.current) {
            initCanvas(canvas.current, color);
            canvas.current.addEventListener("click", canvasOnClick);
            window.addEventListener("resize", windowResize);
        }

        return () => {
            if (canvas.current) {
                canvas.current.removeEventListener("click", canvasOnClick);
                window.removeEventListener("resize", windowResize);
            }
        };
    }, [canvas]);

    return <canvas ref={canvas} style={style} className={className} />;
};

export default FlowField;
