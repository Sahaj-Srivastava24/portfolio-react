import React from 'react'
import Typewriter from 'react-simple-typewriter'
import '../scss/center.css'


export default function Center() {

    return (
        <section>
            <div className='scramble'>
                <h2> Hey, I'm <span> Sahaj Srivastava </span></h2>
                <h3> A Fullstack Web developer</h3>
            </div>
            <div className='typewriter'>
                <h1>
                    I{' '}
                    <span>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        loop
                        // cursor
                        // cursorStyle=''
                        typeSpeed={100}
                        deleteSpeed={70}
                        delaySpeed={1000}
                        words={['am a student at Thapar University', 'build Javascript + React Applications', 'am learning Next.JS ', 'hate using Bootstrap :p']}
                        onLoop={(loopCount) =>
                        console.log(`Just completed loop ${loopCount}`)
                        }
                    />
                    </span>
                </h1>
            </div>
        </section>
    )
}
