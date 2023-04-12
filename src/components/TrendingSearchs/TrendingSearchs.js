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

export default function LazyTrending () {
    const [show, setShow] = useState(false)
    const elementRef = useRef()


    useEffect(function () {
        let observer
        const onChange = (entries, observer) => {
            const element = entries[0]
            console.log(element.isIntersecting)
            if (element.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import ('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: '100px'
        })

        observer.observe(elementRef.current)
    })

        return () => observer && observer.disconnect()
    })

    return <div ref={elementRef}>
        {show ? <TrendingSearch /> : null}
    </div>
}