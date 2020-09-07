import React from 'react'

const Results = ({ catagory, search, data, loading }) => {
  const { results, set } = data;
  // normalize search terms
  const filter = search.replace(/\s+/g, '').toLowerCase()

  if (set) {
    const renderResults = () => {
      const items = results[catagory].map((result, idx) => {
        let name = Object.keys(result)[0]
        if (search === 'All...') {
          return (
            <div key={idx} className="result-box">
              <h3>
                {result[name]}
              </h3>
            </div>
          )
        } else {
          /*
          |--------------------------------------------------
          | BUG
          |--------------------------------------------------
          |
          | If search results in exactly 1 match, the single
          | div will render but will flag an error claiming
          | it needs a unique 'key'. This only happens if it's
          | the first search made, and will no longer throw an
          | error if recreating without a page refresh.
          */
          const newName = result[name].replace(/\s+/g, '').toLowerCase();
          if (newName.includes(filter)) {
            return (
              <div key={idx} className="result-box">
                <h3>
                  {result[name]}
                </h3>
              </div>
            )
          } else return null
        }
      })
      if (items[0] !== null) {
        return items;
      } else return (
        <div className="no-results">
          <h2>These are not the results you're looking for...</h2>
        </div>
      )
    }

    return (
      <section className="results">
        {renderResults()}
      </section>
    )
  }

  if (loading) {
    return (
      <aside className="loading-screen" />
    )
  }

  else return <></>
}

export default Results
