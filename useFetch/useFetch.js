import { useEffect, useState } from "react"

const useFetch = ( url ) => {

    // https://api.breakingbadquotes.xyz/v1/quotes/5

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url)
        const data = await resp.json()

        setState({
            data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
        getFetch()    
    }, [url])
    

    return {
        ...state
    }
}

export {
    useFetch
}
