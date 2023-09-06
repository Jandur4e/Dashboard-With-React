import axios from "axios";
import { useEffect, useState } from "react";

function useData(url) {
    const [state, setState] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        const dataFetch = async () => {
            try {
                const data = await axios.get(url);
                setState(data.data);
            } catch (error) {
                console.log("koj e errorot", error)
                setError({ status: error.response.status })
            }
        };
        dataFetch()
    }, [url])

    return { data: state, error };
}

export default useData;