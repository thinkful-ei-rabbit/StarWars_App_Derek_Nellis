import React, { useState, useCallback } from 'react';

// people
// planets
// films
// species
// vehicles
// starships

const SearchBar = ({ search }) => {
  const [cata, setCata] = useState('')

  const renderOptions = () =>
    [
      'people',
      'planets',
      'films',
      'species',
      'vehicles',
      'starships'
    ].map((cata, idx) => <option key={idx} value={cata}>{cata}</option>);

  const renderSubmit = useCallback(() => {
    const disabled = cata === '';
    return <button className='submit headline' type="submit" disabled={disabled}>SEARCH!</button>
  }, [cata])

  return (
    <nav className="search-bar">
      <form onSubmit={e => search(e, cata)}>
        <label htmlFor="catagory">Search for:</label>
        <select name="catagory" id="catagory" onChange={e => setCata(e.target.value)}>
          <option value="">Select One:</option>
          {renderOptions()}
        </select>
        <div className='form-search'>
          <input name="searchTerm" type="text" placeholder="All..."/>
          {renderSubmit()}
        </div>
      </form>
    </nav>
  );
};

export default SearchBar;
