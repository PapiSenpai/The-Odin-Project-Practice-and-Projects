import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import './gsapStyle.css'

export const GsapFromTo = () => {
    // Each time you want to use gsap, you must use the hook
    useGSAP(() => {
        // This is one of the fundamental methods in GSAP
        //  accepts an ID and applies props to element that is targeted (in this case #blue-box)

        gsap.fromTo('#blue-box', {
            x:250, // the animates across the x-axis
            repeat: -1, // sets if user wants the repeat animations
            yoyo: true, // loop animation
            rotation: 360,
            duration: 1,
            ease: 'bounce.in'
        })
    }, []);


    return(
        <>
            <h1>GsapFromTo</h1>


            <div id="green-box" className="w-20 h-20 bg-green-200 border-lg"></div>
        </>
    )
}