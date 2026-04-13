import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import './gsapStyle.css'

export const GsapForm = () => {
    useGSAP(() => {
        gsap.from('#red-box' , {
            x:250,
            repeat:-1,
            yoyo: true,

        })
    }, []);


    return (
        <>
            <h1>GsapFrom</h1>

            <p>
                The <code>gsap.from()</code> method is used to animate elements from
                a new state to their current state.
            </p>
            <p>
                The <code>gsap.from()</code> method is similar to the <code>gsap.to()</code> method, but the difference is that
                the <code>gsap.from()</code> method animates elements from a new state to their current state, while the
                <code>gsap.to()</code> method animates elements from their current state to a new state.
            </p>


            <p>MOVES FROM RIGHT TO LEFT</p>
            <div id="red-box" className="w-20 h-20 bg-red-200 rounded-lg"></div>
        </>
    )
};