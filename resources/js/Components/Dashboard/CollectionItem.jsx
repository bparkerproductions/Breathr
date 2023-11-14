import { Button, AspectRatio, Typography, CardOverflow, Card, CardContent, CardActions } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function CollectionItem(props) {
  /**
   * Sanitize text from HTML entities
  */
  function getText(textContent) {
    const text = document.createElement("textarea")
    text.innerHTML = textContent
    return text.value
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
            <Typography level="body-md" fontWeight="bold">{getText(props.item.title)}</Typography>
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