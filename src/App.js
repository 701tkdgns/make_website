import React, { useEffect, useRef } from 'react'
import { Home, About, Project, Contact } from './Pages/index'
import { Navbar } from './Component'
import './app.css'

const App = () => {
    const containerRef = useRef(null);
    const pageableRef = useRef(null);

    const loadPageable = async () => {
        const Pageable = (await import('pageable')).default;
        const pageable = new Pageable(containerRef.current, {
            childSelector: "[data-anchor]",
            anchors: [],
            pips: true,
            animation: 1400,
            delay: 0,
            throttle: 50,
            orientation: 'vertical',
            swipeThreshold: 50,
            freeScroll: false,
            navPrevEl: false,
            navNextEl: false,
            infinite: false,
            events: {
                wheel: true,
                mouse: false,
                touch: true,
                keydown: false
            },
            easing: (currentTime, startPos, endPos, interval) => {
                return (
                    -endPos * (currentTime /= interval) * (currentTime - 2) + startPos
                )
            },
        })
        pageableRef.current = pageable;
        // reference : https://github.com/Mobius1/Pageable/issues/32
    }

    // Mount : 화면에 첫 렌더링
    // Update : 다시 렌더링
    // Unmount : 화면에서 사라질 때

    //  useEffect : mount, update, unmount를 사용할 때 쓰는 리액트 HOOK
    //  인자로 콜백함수(다른 함수의 인자로 전달된 함수)로 받는다
    // 참고 : https://www.youtube.com/watch?v=kyodvzc5GHU
    useEffect(() => {
        loadPageable()
    }, [])

    return (
        <>
            <Navbar />
            <main className="indexPage pg-wrapper">
                <div id="container" className="pg-container" ref={containerRef}>
                    <Home />
                    <About />
                    <Project />
                    <Contact />
                </div>
            </main>
        </>
    )
}

export default App