import { useState } from "react";
//@ts-ignore
import { Loaders } from "./Loaders";

import { SpringLoader } from "./SpringLoaders";
export default {
    title: 'DubsUI/Loaders',
};



// export const Spring = () => {

//     return (
//         <Loaders />
//     )
// }


export const Mine = () => {
    const [complete, setComplete] = useState(false)
    const settings = {
        rebound: {
            tension: 2,
            friction: 5
        },
        spinner: {
            id: 'spinner',
            radius: 80,
            sides: 3,
            depth: 4,
            colors: {
                background: null,
                stroke: '#000000',
                base: '#222222',
                child: '#FFFFFF'
            },
            alwaysForward: true, // When false the spring will reverse normally.
            restAt: null, // A number from 0.1 to 0.9 || null for full rotation
            renderBase: true // Optionally render basePolygon
        }
    };
    return (
        <div>
            <SpringLoader settings={settings} complete={complete} />
            <button className="z-[99999999999999999] absolute " onClick={() => {

                setComplete(!complete)
                console.log('clicked: ', complete)
            }}>Toggle</button>
        </div>
    )
}