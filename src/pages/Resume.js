import React from 'react'
import Preloader from '../components/Preloader'
import Wrapper from '../components/Wrapper'
import ResumeBody from '../components/ResumeBody'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import PreloaderContext from '../components/PreloaderContext'

export default function Resume() {
    return (
        <div>
            <PreloaderContext>
                <Preloader />
                <Wrapper />
                <Nav />
                <ResumeBody />
                <Footer />
            </PreloaderContext>
        </div>
    )
}
