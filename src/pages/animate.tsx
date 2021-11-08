import anime from "animejs"
import { useEffect, useRef, useState } from "react"

const Animate = () => {
    const isMounted = useRef(false)
    const animation = useRef<anime.AnimeInstance>()
    const [targetAnime, setTargetAnime] = useState<string>()
    const [transX, setTransX] = useState(250)
    const [seekValue, setSeekValue] = useState(0)
    var isOrigin = true
    var topOrigin = 0
    var leftOrigin = 0

    useEffect(() => {
        if (animation.current) {
            animation.current.seek(seekValue)
        }
    }, [seekValue])

    useEffect(() => {
        // console.log(transX)
        if (isMounted.current && targetAnime) {
            const obj = document.querySelector(targetAnime)?.getBoundingClientRect()
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
            if (obj) {
                console.log(obj)
                console.log(vh)
                console.log(vw)
                topOrigin = obj.top
                leftOrigin = obj.left
                const topPercent = obj.top / vh * 100
                const leftPercent = obj.left / vw * 100
                console.log(topPercent)
                console.log(leftPercent)
                animation.current = anime({
                    targets: targetAnime,
                    autoplay: false,
                    easing: 'easeOutExpo',
                    keyframes: [
                        { top: [topPercent, "50%"], left: [leftPercent, "50%"], duration: 1000 },
                        { scale: 5, easing: "easeInOutBack", duration: 700 },
                    ]
                })
                // .add({
                //     // translateX: (vw / 2) - obj.left - ((obj.width) / 2),
                //     // translateY: (vh / 2) - obj.top - ((obj.height) / 2),
                //     // position: "absolute",
                //     top: "50%",
                //     left: "50%",
                //     easing: 'easeOutExpo'
                // }).add({
                //     scale: 5,
                //     easing: 'easeInOutBack',
                //     duration: 700
                // })
                // targetAnime && playAnimation(targetAnime)
                animation.current.play()
            }
        } else {
            isMounted.current = true
        }
    }, [targetAnime])

    const plus50transX = () => {
        animation.current && animation.current.seek(0)
        setTransX(transX + 50)
    }

    // const playAnimation = async (target: string) => {
    //     const obj = document.querySelector(target)?.getBoundingClientRect()
    //     const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    //     const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    //     console.log(target)
    //     if (animation.current && obj) {
    //         console.log(obj)
    //         console.log(vw)
    //         console.log(vh)
    //         animation.current.add({
    //             duration: 0,
    //         }).add({
    //             // translateX: (vw / 2) - obj.left - ((obj.width) / 2),
    //             // translateY: (vh / 2) - obj.top - ((obj.height) / 2),
    //             // position: "absolute",
    //             top: "50%",
    //             left: "50%",
    //             easing: 'easeOutExpo'
    //         }).add({
    //             top: "50%",
    //             left: "50%",
    //             scale: 5,
    //             easing: 'easeInOutBack',
    //             duration: 700
    //         })
    //         animation.current.play()
    //     }
    // }

    const forwardAnimation = (target: string) => {
        console.log("forward")
        const obj = document.querySelector(target ? target : "")?.getBoundingClientRect()
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        if (obj) {
            console.log(obj)
            console.log(vh)
            console.log(vw)
            topOrigin = obj.top
            leftOrigin = obj.left
            const topPercent = obj.top / vh * 100
            const leftPercent = obj.left / vw * 100
            console.log(topPercent)
            console.log(leftPercent)
            animation.current = anime({
                targets: target,
                autoplay: false,
                keyframes: [
                    { top: [topPercent, "50%"], left: [leftPercent, "50%"], easing: 'easeInOutExpo', duration: 1000 },
                    { scale: 5, easing: "easeInOutBack", duration: 700 },
                ],
                complete: function (anim) {
                    isOrigin = !anim.completed
                }
            })
            animation.current.play()
        }
    }

    const reverseAnimation = (target: string) => {
        if (animation.current) {
            console.log("reverse")
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
            const topPercent = topOrigin / vh * 100
            const leftPercent = leftOrigin / vw * 100
            console.log(topPercent)
            console.log(leftPercent)
            animation.current = anime({
                targets: target,
                autoplay: false,
                easing: 'easeOutExpo',
                keyframes: [
                    { scale: 1, easing: "easeInOutBack", duration: 700 },
                    { top: ["50%", topPercent], left: ["50%", leftPercent], easing: 'easeInOutExpo', duration: 1000 },
                ],
                complete: function (anim) {
                    isOrigin = anim.completed
                }
            })
            // animation.current.reverse()
            animation.current.play()
        }
    }

    const getPosition = () => {
        const obj = document.querySelector('.anime-container')
        console.log(obj?.getBoundingClientRect())
    }

    const addShowClass = (e: HTMLDivElement) => {
        console.log(e.classList)
        e.classList.add('show')
    }

    return (
        <div>
            <h1>Animate</h1>
            <div className="anime-container">
                <div className="anime shadow" />
                <div className="anime el" onClick={() => isOrigin ? forwardAnimation('.anime.el') : reverseAnimation('.anime.el')} />
                {/* <div className="anime el" onClick={() => targetAnime !== ".anime.el" ? setTargetAnime('.anime.el') : reverseAnimation()} /> */}
                {/* <div className="anime el" onClick={(e) => addShowClass(e.currentTarget)} /> */}
            </div>
            <button onClick={() => setTargetAnime('.anime.el')}>Set</button>
            <button onClick={() => playAnimation('.anime.el')}>Play</button>
            <button onClick={() => animation.current && animation.current.pause()}>Pause</button>
            <button onClick={() => animation.current && animation.current.restart()}>Restart</button>
            <button onClick={plus50transX}>Plus</button>
            <button onClick={getPosition}>Get</button>
            <input type="range" min={0} max={100} value={seekValue} onInput={(e) => setSeekValue(parseInt(e.currentTarget.value))} />
            <h1>{seekValue}</h1>
        </div>
    )
}

export default Animate