import {useState, useEffect} from 'react';


const useFetch  = (url) => { //custom hook must start with use...
    const[data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() =>{
            fetch(url)
            .then(res =>{
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
                //console.log(err.message);
            })//Handling fetch errors
        }, 1000);
    }, [url]);
    return {data, isPending, error };
}

export default useFetch;