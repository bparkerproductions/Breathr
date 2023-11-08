import { Card, Typography, CardContent, Divider, Box, Input } from '@mui/joy'
import CollectionItem from '@/Components/Dashboard/CollectionItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { usePage } from '@inertiajs/react'
import { useState, useEffect } from 'react'

export default function CollectionList(props) {
  const { user } = usePage().props
  const [searchQuery, setSearchQuery] = useState("")
  const [collectionItems, setCollectionItems] = useState([])
  const [recentSearch, setRecentSearch] = useState("")

  useEffect(() => {
    // Initially set collection items from the database
    setCollectionItems(user['collection_items'])
  }, [])

  function collectionItemsResults() {
    if (user['collection_items']) {
      return (
        <Box>
          {collectionItems.map( elem => {
            return (
              <CollectionItem key={elem.video_id} item={elem} />
            )
          })}
        </Box>
      );
    }
    else {
      return <Typography>You have no collection items.</Typography>
    }
  }

  function resultsText() {
    if (searchQuery && recentSearch) {
      return <Typography level="body-lg">Results for <strong>{recentSearch}</strong></Typography>
    }
  }

  function search() {

    if (searchQuery) {
      fetch(`/collection/search?search=${searchQuery}`)
      .then(response => response.json())
      .then(response => {
        setCollectionItems(response)
        setRecentSearch(searchQuery)
      })
    }
  }

  function clearSearch() {
    // Reset results when the search bar is cleared
    setRecentSearch("")
    setSearchQuery("")
    setCollectionItems(user['collection_items'])
  }

  function handleOnChange(e) {
    if (!e.target.value) clearSearch()
    else setSearchQuery(e.target.value)
  }

  return (
    <Card variant="soft" color="neutral" sx={{ marginTop: 5 }}>
      <Typography level="h3">Your Collection</Typography>
      <Divider />
      <CardContent>
      <Input
        startDecorator={
          <FontAwesomeIcon className="cursor-pointer" icon={faSearch} onClick={search} />
        }
        onKeyDown={e => { if (e.key === 'Enter') search() }}
        type="text"
        color="primary"
        variant="outlined"
        value={searchQuery}
        onChange={handleOnChange}
        placeholder="Search your collection"
      />
      </CardContent>
      <CardContent>
        {resultsText()}
        {collectionItemsResults()}
      </CardContent>
    </Card>
  )
}