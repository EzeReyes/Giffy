import React, { useEffect, useState, useRef } from "react";
import getTrendingsTerms from "services/trendingSearch";
import Category from "components/Category/Category"

function TrendingSearch () {
    const [trends, setTrends] = useState([]);

    useEffect( function () {
        getTrendingsTerms().then(setTrends)
    }, [])

    return (<Category nombre="Tendencias de Giffy" tipos={trends} />)
}

function useNearScreen ( { distance= "100px"} = {} ) {
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

export default function LazyTrending () {
    const {isNearScreen, frontRef} = useNearScreen()


    return <div ref={frontRef}>
        {isNearScreen ? <TrendingSearch /> : null}
    </div>
}