import React, { useCallback, useEffect, useRef } from "react";
import Spinner from 'components/Spinner/index';
import ListOfGifs from 'components/ListOfGifs/index';
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/UseNearScreen";
import debounce from "just-debounce-it";

export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false });

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage]);

    useEffect(function () {
        if (isNearScreen) debounceHandleNextPage();
    }, [debounceHandleNextPage, isNearScreen]);
    return <>
        {loading
            ? <Spinner />
            : <>
                <h3 className="App-title">{decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef}></div>
            </>
        }
    </>
}