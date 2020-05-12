import {useEffect, useState} from 'react';

export const useFetch = (url) => {
const [state, setState] = useState({data: '', loading: false}) 

    useEffect(() => {
        setState({data: state.data, loading: true})
        fetch(url).then(y => y.text()).then(x=> setState({data: x, loading: false}));
    }, [url, setState]);

    return state;
}