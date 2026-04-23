import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import './gsapStyle.css'

export const GsapFromTo = () => {
    // Each time you want to use gsap, you must use the hook
    useGSAP(() => {
        // This is one of the fundamental methods in GSAP
        //  accepts TWO IDs/Classes and applies props to element that is targeted (in this case #blue-box)
        // You can define both states here
        gsap.fromTo('#green-box', {
            x:0,
            rotation: 90,
            borderRadius: '0%'
        },
        {
            x:250, // the animates across the x-axis
            repeat: -1, // sets if user wants the repeat animations
            yoyo: true, // loop animation
            borderRadius: 360,
            rotation: 360,
            duration: 1,
            ease: 'bounce.in'
        })
    }, []);


    return(
        <>
            <h1>GsapFromTo</h1>
            <p>
                The <code>gsap.fromTo()</code> method is used to animate elements from a new state to a new state.
                <br /> The <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the difference is that
                the <code>gsap.fromTo()</code> method animates elements from a new state to a new state, while the
                <code>gsap.from()</code> method animates elements from a new state to their current states and the
                <code>gsap.to()</code> method animates elements from their current state to a new state.
            </p>
            <p>
            </p>

            <div id="green-box" className="w-20 h-20 bg-green-200 border-lg"></div>
        </>
    )
}