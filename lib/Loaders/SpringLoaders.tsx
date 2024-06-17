import { useEffect } from "react";
//@ts-ignore
import * as demo from "./utils/demo.js";

interface SettingsType {
    rebound: {
        tension: number;
        friction: number;
    };
    spinner: {
        id?: string;
        radius: number;
        sides: number;
        depth: number;
        colors: {
            background: string | null;
            stroke: string | null;
            base: string | null;
            child: string | null;
        };
        alwaysForward: boolean;
        restAt: number | null;
        renderBase: boolean;
    };
}

interface SpringLoaderProps {
    settings?: SettingsType,
    timeout?: number,
    complete?: boolean

}
const SpringLoader = ({ settings, timeout, complete }: SpringLoaderProps) => {
    useEffect(() => {
        demo.demo.init(settings, timeout);
        return () => {
            demo.demo.spinner.setComplete();
        };
    }, []);

    useEffect(() => {
        if (complete) {
            demo.demo.spinner.setComplete();
        }
    }, [complete]);

    return null;

};

SpringLoader.defaultProps = {
    settings: {
        rebound: {
            tension: 2,
            friction: 5
        },
        spinner: {
            radius: 80,
            sides: 3,
            depth: 4,
            colors: {
                background: '#000000',
                stroke: '#000000',
                base: '#222222',
                child: '#FFFFFF'
            },
            alwaysForward: true,
            restAt: 0.5,
            renderBase: true
        }
    }

};

export { SpringLoader };
