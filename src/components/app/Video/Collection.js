import React, { useEffect, useRef, useState } from 'react'

import VideoResult from './VideoResult'
import ComponentControls from './../Controls/ComponentControls'
import CycleVideos from './../Controls/CycleVideos'
import { Stack, Container, Typography, Card, Box, CardContent, Link } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

const Collection = (props) => {
  const [boxHeight, setBoxHeight] = useState(null)
  const cardRef = useRef(null)

  useEffect(() => {
    // Initially set box height
    if (cardRef.current) {
      setBoxHeight(cardRef.current.offsetHeight + "px")
    }
  }, [])

  function getCollectionClasses() {
    if ( !(props.show && props.allToggled) ) return 'hidden'
  }

  function renderCollection() {
    // Placeholder until backend
    const isAuthenticated = false;

    if (isAuthenticated) {
      return (
        <VideoResult
          grabFromCollection={true}
          canRemove={true}>
        </VideoResult>
      )
    }
    else {
      return (
        <CardContent sx={{ paddingTop: 2 }}>
        <Typography level="body-md">Want to save soundscapes? <Link href="#"> Sign up for a free account</Link>
        </Typography>
        </CardContent>
      )
    }
  }

  return (
    <Container
      id="video-collection"
      className={getCollectionClasses()}
      sx={{ height: boxHeight, marginY: 12.5 }}
    >
      <Card ref={cardRef}>
        <ComponentControls toggleType="collection"></ComponentControls>
        <Stack direction="row">
          <FontAwesomeIcon icon={faAddressBook} size="lg" />
          <Typography level="title-lg" sx={{ marginLeft: 1, marginRight: 1 }}>Your Collection</Typography>
          <Box sx={{  marginLeft: 1 }}>
            <CycleVideos />
          </Box>
        </Stack>

        {renderCollection()}
      </Card>
    </Container>
  )
}

export default Collection;