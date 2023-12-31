import { useState , useEffect} from 'react';
import { BASE_URL } from '../globals';

// @ts-ignore
interface useFetchType {
  data: Record<string, unknown>| null ,
  isPending: boolean,
  setData: (data: any) => void,
  error?: string | null
}

const useFetch = (endpoint: string, options?: RequestInit, delay:number=0) => {
  const [data, setData] = useState<Record<string, unknown>|null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{
    const abortCont = new AbortController();

    fetch(BASE_URL+endpoint, {...options, signal: abortCont.signal}).then(res=>{
      if(!res.ok) throw Error('Could not fetch data');
      return res.json()
    }).then(data=>{
      setTimeout(() => {
        setData(data)
        setIsLoading(false)
        setError(null)
      }, delay);
    }).catch(err=>{
      if(err.name === 'AbortError'){
        console.log('fetch aborted');
      }else{
        console.log(err.message);
        setError(err.message)
        setIsLoading(false)  
      }
    })
    
    return () => abortCont.abort();
  }, [endpoint])

  return { data, isLoading, setData, error };
}

 
export default useFetch;