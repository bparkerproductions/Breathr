import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import suggestions from '@/helpers/initialSearchSuggestions'
import { Chip, Stack, Box, Tooltip, IconButton } from '@mui/joy'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const SearchSuggestions = (props) => {
  const [categories, setCategories] = useState([])

  /**
   * Get list of video categories from a random collection video ID
   */
  const getThesaurusCategories = useCallback(async function (term) {
    if (!term) return
    const url = `/thesaurus/suggestions?term=${encodeURIComponent(term)}`

    fetch(url)
    .then(response => response.json())
    .then(response => {
      if (response.length && response[0].meta) {
        const results = response[0].meta.syns
        let resCategories = []

        results.forEach(elem => resCategories.push(...elem))
        const limitedArr = resCategories.slice(0, 15) // 10 Suggestions maximum

        setCategories(limitedArr)
        props.searchSuggestionsSet(limitedArr)
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

  /**
   * Get values from a helper array and select a random term to fill the initial search suggestions
   */
  function getRandomTerm() {
    const randomInt = Math.floor(Math.random() * (suggestions.length-1))
    const randomTerm = suggestions[randomInt]
    getThesaurusCategories(randomTerm)
  }

  return (
    <Stack sx={{
      flexDirection: {xs: 'column', sm: 'row'},
      alignItems: 'center'
    }}>
      <Tooltip title="Get new suggestions">
        <IconButton onClick={getRandomTerm}>
          <FontAwesomeIcon
            icon={faLightbulb}
            size="lg"
            className="text-blue-500"
            title="Search suggestions"
          />
        </IconButton>
      </Tooltip>

      <Box sx={{ marginLeft: 1.75 }}>
        {categories.map(category => {
        const id = Math.floor(Math.random() * 10000)
        return (
          <Chip
            key={category + id}
            color="primary"
            variant="soft"
            onClick={() => props.fill(category)}
            sx={{ 
              marginX: 0.5,
              marginY: 0.5
             }}
          >
            {category}
          </Chip>
        )
        })}
      </Box>
    </Stack>
  )
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(SearchSuggestions)