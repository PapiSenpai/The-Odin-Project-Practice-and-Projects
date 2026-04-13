import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import './gsapStyle.css'


// Define a callback function and when is should run
export const GsapTo = () => {
    // Each time you want to use gsap, you must use the hook
    useGSAP(() => {
        // This is one of the fundamental methods in GSAP
        //  accepts an ID and applies props to element that is targeted (in this case #blue-box)

        gsap.to('#blue-box', {
            x:250, // the animates across the x-axis
            repeat: -1, // sets if user wants the repeat animations
            yoyo: true, // loop animation
            rotation: 360,
            duration: 1,
            ease: 'power4.inOut'
        })
    }, []);


    return (
        <main>
            <h1>
                GsapTo
            </h1>
            <p>
                The <code>gsap.to()</code> method is used to animate
                elements from their current state to a new state.
            </p>
            <p>
                The <code>gsap.to()</code> method is similar to the {" "}
                <code>gsap.from()</code> method, but the difference is that the {" "}
                <code>gsap.to()</code> method animates elements from their current state
                to a new state, while the <code>gsap.from()</code> method animates elements
                from a new state to their current state
            </p>
            <br />
            <div>
                <p>MOVES FROM LEFT TO RIGHT</p>
                <div id="blue-box" className="w-20 h-20 bg-blue-200 rounded-lg"></div>
            </div>

        </main>
    );
};