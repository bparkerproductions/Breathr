import React, { useEffect, useRef, useState } from 'react'

import { usePage } from '@inertiajs/react'
import VideoResult from '@/Components/VideoResult'
import ComponentControls from '@/Components/ComponentControls'
import CycleVideos from '@/Components/CycleVideos'
import { Stack, Container, Typography, Card, Box, CardContent, Link } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

const Collection = (props) => {
  const { auth } = usePage().props
  const [boxHeight, setBoxHeight] = useState(null)
  const cardRef = useRef(null)

  useEffect(() => {
    // Initially set box height
    if (cardRef.current) {
      setBoxHeight(cardRef.current.offsetHeight + "px")
    }
  }, [])

  function getCollectionClasses() {
    if ( !(props.show) ) return 'hidden'
  }

  function renderCollection() {
    if (auth.user) {
      return (
        <VideoResult
          grabFromCollection={true}>
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