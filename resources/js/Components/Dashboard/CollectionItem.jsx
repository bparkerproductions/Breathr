import { Button, AspectRatio, Typography, CardOverflow, Card, CardContent, CardActions } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import TextInput from '@/Components/Form/TextInput'
import InputError from '@/Components/Form/InputError'

import { setSnackbarOpen, setSnackbarMessage } from '@/actions'
import { useState } from 'react'
import { router } from '@inertiajs/react'
import { connect } from 'react-redux'

const CollectionItem = props => {
  const [inputTitle, setInputTitle] = useState(props.item.title)
  const [title, setTitle] = useState(props.item.title)
  const [showTitleField, setShowTitleField] = useState(false)
  const [titleError, setTitleError] = useState(null)

  /**
   * Sanitize text from HTML entities
  */
  function getText(textContent) {
    const text = document.createElement("textarea")
    text.innerHTML = textContent
    return text.value
  }

  /**
   * Make a PUT request to edit the collection item's title in the DB
   */
  function persistTitle() {

    router.put(route('collection.editTitle', props.item.id), { title: inputTitle }, {
      onSuccess: () => {
        setTitleError(null)
        setTitle(inputTitle)
        props.setSnackbarOpen(true)
        props.setSnackbarMessage('Title updated successfully.')
        setShowTitleField(false)
      },
      onError: () => {
        setTitleError('The title cannot be empty.')
      },
      preserveScroll: true
    })
  }

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        bgcolor: 'neutral.softBg',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        marginBottom: 2
      }}
    >
        <CardOverflow>
          <AspectRatio
          ratio="4:3"
          flex
          sx={{
            minWidth: 300,
            minHeight: 200,
            mr: { xs: 'var(--CardOverflow-offset)', sm: 0 },
            mb: { xs: 0, sm: 'var(--CardOverflow-offset)' },
            '--AspectRatio-radius': {
              xs: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0',
              sm: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0 calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))',
            },
            '--AspectRatio-maxHeight': { xs: '160px', sm: '9999px' },
          }}
          >
          <img src={props.item.thumbnail_url} alt={props.item.title} />

          </AspectRatio>
        </CardOverflow>

        <CardContent>
          <Typography
            level="body-md"
            fontWeight="bold"
            sx={{ marginBottom: showTitleField ? 1 : 0 }}
          >
            <FontAwesomeIcon
              icon={faPen}
              title="Edit title"
              className="text-blue-700 cursor-pointer mr-2"
              onClick={() => setShowTitleField(!showTitleField)}
            /> {getText(title)}
          </Typography>
          {showTitleField && <TextInput
            id={props.item.video_id}
            type="text"
            name="title"
            value={inputTitle}
            className="mt-3 block w-full"
            placeholder="Edit title"
            isFocused={true}
            onChange={e => setInputTitle(e.target.value)}
            onKeyDown={e => { e.key === 'Enter' && persistTitle() }}
          />
          }
          <InputError message={titleError} className="mt-2" />
          <Typography level="body-md">{getText(props.item.description)}</Typography>

          <CardActions>
            <Button
              target="_blank"
              component="a"
              href={`https://www.youtube.com/watch?v=${props.item.video_id}`}
              size="sm"
              color="danger"
              sx={{ width: '200px'}}
              startDecorator={<FontAwesomeIcon
                icon={faYoutube}
                className="cursor-pointer"
                size="lg"
              />}
            >Go to video</Button>
            <Button
              color="danger"
              size="sm"
              sx={{ marginLeft: 1 }}
              onClick={() => props.deleteItem(props.item.video_id)}
              startDecorator={ <FontAwesomeIcon icon={faTrash}/> }
            >Remove</Button>
          </CardActions>
        </CardContent>
    </Card>
  )
}

export default connect(null, {
  setSnackbarOpen,
  setSnackbarMessage
})(CollectionItem)