import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import Thesaurus from '../../../helpers/apis/thesaurus'
import suggestions from '../../../helpers/initialSearchSuggestions'

const SearchSuggestions = (props) => {
  const [categories, setCategories] = useState([])

  /**
   * Get list of video categories from a random collection video ID
   */
  const getThesaurusCategories = useCallback(async function (term) {
    if (!term) return
    const url = `${Thesaurus.base}/${term}?key=${Thesaurus.key}`

    fetch(url)
    .then(response => response.json())
    .then(response => {
      if (response.length) {
        const results = response[0].meta.syns
        let resCategories = []

        results.forEach(elem => resCategories.push(...elem))
        const limitedArr = resCategories.slice(0, 15) // 15 Suggestions maximum

        setCategories(limitedArr)
      }
    })
  }, [])

  /**
   * Get a random initial category. After the user searches, 
   * suggestions will be made based on their search
   */
  useEffect(() => {
    const randomInt = Math.floor(Math.random() * (suggestions.length-1))
    const randomTerm = suggestions[randomInt]
    getThesaurusCategories(randomTerm)
  }, [getThesaurusCategories])

  function getRandomTerm() {
    const randomInt = Math.floor(Math.random() * (suggestions.length-1))
    const randomTerm = suggestions[randomInt]
    getThesaurusCategories(randomTerm)
  }

  function generateSuggestions() {
    return(
      categories.map(category => {
        const id = Math.floor(Math.random() * 10000)
        return <li key={category + id} className="badge mx-1 py-1 px-2 mb-1">{category}</li>
      })
    )
  }

  return (
    <div className="mb-3 d-flex align-items-center">
      <i 
        className="fas fa-lightbulb fa-lg text-secondary me-3 cursor-pointer"
        title="Search Suggestions"
        onClick={getRandomTerm}
      ></i>
      <ul className="list-unstyled m-0 p-0 d-flex flex-wrap">
        {generateSuggestions()}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(SearchSuggestions)