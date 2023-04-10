import React, { useEffect, useState } from "react";
import getTrendingsTerms from "../../services/trendingSearch";
import Category from "../../components/Category/Category"

const trendingSearch = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [trends, setTrends] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect( function () {
        getTrendingsTerms().then(setTrends)
    }, [])

    return (<Category nombre="Tendencias de Giffy" tipos={trends} />)
}

export default trendingSearch