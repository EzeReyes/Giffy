import { useState, useEffect, useRef } from "react";

export default function useNearScreen ( { distance= "100px", externalRef, once = true } = {} ) {
    const [isNearScreen, setShow] = useState(false)
    const frontRef = useRef()

    useEffect(function () {
        let observer

        const element = externalRef ? externalRef.current : frontRef.current

        const onChange = (entries, observer) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setShow(true)
                once && observer.disconnect() 
            }
                else {
                    !once && setShow(false)
                }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import ('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
        })

        if (element) observer.observe(element)
    })

        return () => observer && observer.disconnect()
    })

    return {isNearScreen, frontRef}
}