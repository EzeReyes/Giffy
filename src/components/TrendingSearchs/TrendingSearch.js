import React, { useEffect, useState } from "react";
import getTrendingsTerms from "services/trendingSearch";
import Category from "components/Category/Category"

export default function TrendingSearch () {
    const [trends, setTrends] = useState([]);

    useEffect( function () {
        getTrendingsTerms().then(setTrends)
    }, [])

    return (<Category nombre="Tendencias de Giffy" tipos={trends} />)
}

