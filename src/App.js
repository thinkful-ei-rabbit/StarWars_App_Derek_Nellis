import React, { useState } from 'react';

import { useGetData } from './customHooks/use-GetData';
import SearchBar from './SearchBar/SearchBar';
import Results from './Results/Results';

const App = () => {
  const [cata, setCata] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  // Custom Hook => 'listens' for 'cata' change
  const data = useGetData(cata, search)

  const handleSearch = async(e, catagory) => {
    e.preventDefault();
    const searchTerm = e.target.searchTerm.value
    if (searchTerm === search && catagory === cata) {
      alert('Hey! You already searched that!')
      return
    }

    // resets Custom Hook states
    data.handleNewSearch();

    setCata(catagory);
    setSearch(searchTerm);
    setLoading(true)
  }

  return (
    <main className="App">
      <header className="main-header">
        <h1 className='headline'>
          STAR WARS SEARCH!
        </h1>
      </header>
      <SearchBar search={handleSearch}/>
      <Results catagory={cata} search={search} data={data} loading={loading}/>
    </main>
  );
};

export default App;
