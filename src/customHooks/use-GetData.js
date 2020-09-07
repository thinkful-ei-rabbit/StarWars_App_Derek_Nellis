import { useCallback, useState, useEffect } from "react";
import { API_ENDPOINT } from '../apiconfig';


export function useGetData(cata, search) {
  const [results, setResults] = useState('');
  const [set, setSet] = useState(false);

  const getTheData = useCallback(() => {
    async function fetchData(page = 1) {
      try {
        const theData = await fetch(API_ENDPOINT + cata + `/?page=${page}`)
        const json = await theData.json();
        const next = json.next

        setResults(results => {
          return {
            [cata]: [
              ...results[cata],
              ...json.results.map(e => e)
            ]
          }
        });
        if (next !== null) {
          page++;
          fetchData(page)
        } else {
          setSet(true)
        }
      } catch (error) {
        throw new Error('damnit Jim!');
      }
    }

    if (cata !== '') {
      setResults({[cata]: []});
      fetchData()
    }
  }, [cata, setResults])

  useEffect(() => {
    if (cata === '') return;
    getTheData()
  }, [cata, search, getTheData])

  const handleNewSearch = () => {
    setResults('');
    setSet(false)
  }

  return { results, set, handleNewSearch };
}
