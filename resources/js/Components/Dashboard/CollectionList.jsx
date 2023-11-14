import { Card, Typography, CardContent, Divider, Box, Chip, Input, Button } from '@mui/joy'
import CollectionItem from '@/Components/Dashboard/CollectionItem'
import { setSnackbarOpen, setSnackbarMessage } from '@/actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, router, usePage } from '@inertiajs/react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const CollectionList = props => {
  const { auth, user } = usePage().props
  const [searchQuery, setSearchQuery] = useState("")
  const [collectionItems, setCollectionItems] = useState([])
  const [recentSearch, setRecentSearch] = useState("")

  useEffect(() => {
    // Initially set collection items from the database if logged in
    if (auth.user) {
      setCollectionItems(user['collection_items'])
    }
  }, [])

  /**
   * Query the database for collectionItems and set the result in the React state
   */
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

  /**
   * Reset results when the search bar is cleared
   */
  function clearSearch() {
    setRecentSearch("")
    setSearchQuery("")
    setCollectionItems(user['collection_items'])
  }

  /**
   * Handle searching or clearing the results if the bar becomes empty
   */
  function handleOnChange(e) {
    if (!e.target.value) clearSearch()
    else setSearchQuery(e.target.value)
  }

  /**
   * Render the search bar if there are items
   */
  function searchBar() {
    if (user['collection_items'].length) {
      return <Input
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
    }
  }

  /**
   * Delete a specific collection item from the db then update the local state
   */
  function deleteItem(video_id) {
    router.delete(`/collection/${video_id}`, {
      onSuccess: () => {

        const newItems = collectionItems.filter(elem => {
          return elem.video_id !== video_id
        })
        setCollectionItems(newItems)

        // Set snackbar state
        props.setSnackbarOpen(true)
        props.setSnackbarMessage(`Your video with video_id of ${video_id} has successfully been removed from your collection!`)
      },
      preserveScroll: true
    })
  }

  return (
    <Card variant="soft" color="neutral" sx={{ marginTop: 5 }}>
      <Typography level="h3">Your Collection</Typography>
      <Divider />
      <CardContent>
      {searchBar()}
      </CardContent>
      <CardContent>
        {(searchQuery && recentSearch) && 
        <Typography level="body-lg">
          Results for <strong>{recentSearch}</strong>
          <Chip onClick={clearSearch} color="primary" className="ml-3 mb-1" variant="solid">Clear Results</Chip>
        </Typography>}

        {user['collection_items'].length ? 
          <Box>
            {collectionItems.map( elem => {
              return (
                <CollectionItem deleteItem={deleteItem} key={elem.video_id} item={elem} />
              )
           })}
          </Box> :
          
          <>
            <Typography>You have no collection items.</Typography>
            <Link href={route('main')}>
              <Button sx={{ maxWidth: '200px', marginTop: 1 }} color="primary">Go add some!</Button>
            </Link>
          </>
        }
      </CardContent>
    </Card>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {
  setSnackbarOpen,
  setSnackbarMessage
})(CollectionList)