import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

function Section2() {

    const sectionRef = useRef(null)
    const trigerRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0,
            opacity: 0.7,
            duration: 10
        },
        {
            translateX: "-270vw",
            opacity: 1,
            duration: 10,

            ease: "none",
            scrollTrigger: {
                trigger : sectionRef.current,
                scroller: "body",
                markers: true,
                start: "top top",
                end: "1000 top",
                scrub: 0.1,
                pin: true,
            }
        }
        )
        return() => {
            pin.kill()
        }
    }, [])

  return (
    <section className="overflow-x-hidden">

            <div ref={sectionRef} className=" w-[500vw]  h-screen flex items-center justify-center ">
            
                <h1 className=" shadow-lg tracking-wide font-bold text-[180px] sm:text-[200px] text-white uppercase">Let's have a look about me!</h1>
        </div>

    </section>
  )
}

export default Section2