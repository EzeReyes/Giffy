import { useState, useEffect, useRef } from "react";

export default function useNearScreen ( { distance= "100px"} = {} ) {
    const [isNearScreen, setShow] = useState(false)
    const frontRef = useRef()

    useEffect(function () {
        let observer
        const onChange = (entries, observer) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import ('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
        })

        observer.observe(frontRef.current)
    })

        return () => observer && observer.disconnect()
    })

    return {isNearScreen, frontRef}
}