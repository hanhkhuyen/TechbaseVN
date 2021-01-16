import { useState, useCallback, } from 'react'

export const useFetchData = () => {
    const [res, setRes] = useState({ data: null, error: null });
    const callAPI = useCallback(() => {
        fetch(`https://api.covid19api.com/summary`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer",
                "Content-Type": "application/json; charset=UTF-8",
            },
            mode: "cors",
        })
            .then(response => response.json())
            .then(response => {
                setRes({ data: response, error: null });
            })
            .catch(error => {
                setRes({ data: null, error });
            });
    }, [])
    return [res, callAPI];
}