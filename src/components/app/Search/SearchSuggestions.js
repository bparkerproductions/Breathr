import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import Thesaurus from '../../../helpers/apis/thesaurus'
import suggestions from '../../../helpers/initialSearchSuggestions'
import { Chip, Stack, Box } from '@mui/joy'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

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

  useEffect(() => {
    getThesaurusCategories(props.searchChanged)
  }, [props.searchChanged, getThesaurusCategories])

  function getRandomTerm() {
    const randomInt = Math.floor(Math.random() * (suggestions.length-1))
    const randomTerm = suggestions[randomInt]
    getThesaurusCategories(randomTerm)
  }

  function generateSuggestions() {
    return(
      categories.map(category => {
        const id = Math.floor(Math.random() * 10000)
        return (
          <Chip
            key={category + id}
            color="primary"
            variant="soft"
            onClick={() => props.fill(category)}
            sx={{ 
              marginX: 0.5,
              marginBottom: 0.75
             }}
          >
            {category}
          </Chip>
        )
        })
      )
  }

  /**
   * Don't show suggestions if there are no results or if it's "off"
   */
  function isDisabled() {
    if ( !categories.length ) return 'disabled'
  }

  return (
    <Stack direction="row" className={isDisabled()}>
      <FontAwesomeIcon
        icon={faLightbulb}
        size="lg"
        color="primary"
        title="Search suggestions"
        onClick={getRandomTerm}
      />

      <Box sx={{ marginLeft: 1 }}>
        {generateSuggestions()}
      </Box>
    </Stack>
  )
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(SearchSuggestions)