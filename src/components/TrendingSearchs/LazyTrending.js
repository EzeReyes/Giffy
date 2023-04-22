import React, {Suspense} from "react";
import useNearScreen from "Hooks/useNearScreen";

// CON REACT.LAZI DESCARGA DE FORMA ASINCRONA EL COMPONENTE TRENDINGSEARCH, SOLO CUANDO LO NECESITEMOS

const TrendingSearch = React.lazy(
    () => import('./TrendingSearch'))

export default function LazyTrending () {
    const {isNearScreen, frontRef} = useNearScreen( { distance:"0px"} )


    return <div ref={frontRef}>
        
        {isNearScreen ? <Suspense fallback={'Estoy cargando'}> <TrendingSearch/> </Suspense>: null}
        
    </div>
}