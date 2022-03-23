import Spinner from "components/Spinner";
import useNearScreen from "hooks/UseNearScreen";
import React, { Suspense } from "react";

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
);

export default function LazyTrending() {
    const { isNearScreen, fromRef } = useNearScreen({ distance: '0px' });

    return <div ref={fromRef}>
        <Suspense fallback={<Spinner />}>
            {isNearScreen ? <TrendingSearches /> : <Spinner />}
        </Suspense>
    </div>
}