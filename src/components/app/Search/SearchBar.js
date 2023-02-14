import React, {useState} from 'react'

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState('')

  function trackInput() {
    props.searchCallback(searchQuery)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  function updateSearchQuery(event) {
    setSearchQuery(event.target.value)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      trackInput()
    }
  }

  return (
    <div className="search-input-container">
      <div className="search-icon" onClick={trackInput}>
        <i className="fas fa-search"></i>
      </div>
      <div className="search-input">
        <form onSubmit={handleSubmit}>
          <input type="text" onKeyDown={handleKeyDown} onChange={updateSearchQuery}></input>
        </form>
      </div>
    </div>
  )
}

export default SearchBar