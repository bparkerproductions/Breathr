import React, { useEffect, useRef, useState } from 'react'

import { usePage, Link } from '@inertiajs/react'
import VideoResult from '@/Components/VideoResult'
import ComponentControls from '@/Components/ComponentControls'
import CycleVideos from '@/Components/CycleVideos'
import { Stack, Container, Typography, Card, Box, CardContent } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

const Collection = (props) => {
  const { auth } = usePage().props
  const [boxHeight, setBoxHeight] = useState(null)
  const cardRef = useRef(null)

  /**
   * On load, initially set box height depending on how many items are in there
   */
  useEffect(() => {
    if (cardRef.current) {
      setBoxHeight(cardRef.current.offsetHeight + "px")
    }
  }, [])

  return (
    <Container
      id="video-collection"
      className={props.show || 'hidden'}
      sx={{ height: boxHeight, marginY: 12.5 }}
    >
      <Card ref={cardRef}>
        <ComponentControls toggleType="collection"></ComponentControls>
        <Stack direction="row">
          <FontAwesomeIcon icon={faAddressBook} size="lg" className="text-blue-500" />
          <Typography level="title-lg" sx={{ marginLeft: 1, marginRight: 1 }}>Your Collection</Typography>
          <Box sx={{  marginLeft: 1 }}>
            { auth.user && <CycleVideos color="text-blue-500" /> }
          </Box>
        </Stack>

        {auth.user ? 
          <VideoResult grabFromCollection={true} /> :

          <CardContent sx={{ paddingTop: 2 }}>
            <Typography level="body-md">Want to save soundscapes?
              <Link className="underline text-blue-500" href={route('register')}> Sign up for a free account</Link>
            </Typography>
          </CardContent>
        }
      </Card>
    </Container>
  )
}

export default Collection;