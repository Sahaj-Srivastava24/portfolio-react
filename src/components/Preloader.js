import React,{ useEffect, useRef, useContext } from 'react'
import '../scss/preloader.css'
import gsap,{ TimelineLite, Power3 } from "gsap/all";
import { LoaderContext } from "./PreloaderContext";


export default function Preloader() {
    
    const foldOne = useRef(), foldTwo = useRef(), foldThird = useRef(), foldFour = useRef(), foldFive = useRef();
    const line1 = useRef(), line2 = useRef(), line3 = useRef(), line4 = useRef(), grid= useRef();
    const prel = useRef(), line = useRef();
    gsap.registerPlugin(TimelineLite,Power3);

    const [ triggerOutro ] = useContext(LoaderContext)

    // Testing triggeOutro
    // setTimeout(() => {
    //     setTriggerOutro(true);
    //     console.log(triggerOutro)
    // },3000)

    useEffect(() => {
        const tl = new TimelineLite({paused: false});
        if(!triggerOutro){
            tl
            .to(line.current,{ease: Power3.easeOut, duration : 1.5, height: '100vh'} ,0.5)
            .to(line.current, { duration: 0.8, opacity: 0}, '<')
            .to(foldThird.current, { ease: Power3.easeOut,duration : 0.8, y: '-100vh'},'>-0.1')
            .to(foldFour.current, { ease: Power3.easeOut,duration : 0.8, y: '100vh'}, ">-0.5")
            .to(foldTwo.current, { ease: Power3.easeOut,duration : 0.8, y: '100vh'}, "<0.1")
            .to(foldOne.current, { ease: Power3.easeOut,duration : 0.8, y: '-100vh'}, ">-0.5")
            .to(foldFive.current, { ease: Power3.easeOut,duration : 0.8, y: '-100vh'}, "<")
            .set(prel.current, {display : 'none'})
            .to(line2.current, { duration : 1, height : '100vh'}, '<0.1')
            .to(line4.current, { duration : 1, height : '100vh'}, '<0.2')
            .to(line3.current, { duration : 1, height : '100vh'}, '<0.2')
            .to(line1.current, { duration : 1, height : '100vh'}, '<0.2')
        }
        if(triggerOutro){
            tl
            .set(prel.current, {display : 'flex'})
            .to(foldFive.current, { ease: Power3.easeOut,duration : 0.8, y: '0'}, "=+0.1")
            .to(foldOne.current, { ease: Power3.easeOut,duration : 0.8, y: '0'}, ">-0.5")
            .to(foldTwo.current, { ease: Power3.easeOut,duration : 0.8, y: '-0'}, "<0.1")
            .to(foldFour.current, { ease: Power3.easeOut,duration : 0.8, y: '+0'}, ">-0.5")
            .to(foldThird.current, { ease: Power3.easeOut,duration : 0.8, y: '0'},'<')
        }
    },[triggerOutro])

    return (
        <React.Fragment>
            <div className='preloader' ref={ prel } >
                <div className='line' ref={ line }></div>
                <div className="fold" ref={ foldOne } ></div>
                <div className="fold" ref={ foldTwo } ></div>
                <div className="fold" ref={ foldThird } ></div>
                <div className="fold" ref={ foldFour } ></div>
                <div className="fold" ref={ foldFive } ></div>
            </div>    
            <div className="gridLines" ref= {grid}>
                <div className="maskLine" ref={ line1 }></div>
                <div className="maskLine" ref={ line2 }></div>
                <div className="maskLine" ref={ line3 }></div>
                <div className="maskLine" ref={ line4 }></div>
            </div>
        </React.Fragment>
    )
}
