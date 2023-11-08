import { Button, AspectRatio, Typography, CardOverflow, Card, CardContent } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function CollectionList(props) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        bgcolor: 'neutral.softBg',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
        <CardOverflow>
            <AspectRatio
            ratio="4:3"
            flex
            sx={{
                minWidth: { sm: 120, md: 160 },
                '--AspectRatio-maxHeight': { xs: '160px', sm: '9999px' },
            }}
            >
            <img src={props.item.thumbnail_url} alt={props.item.title} />

            </AspectRatio>
        </CardOverflow>

        <CardContent>
            <Typography level="body-md" fontWeight="bold">{props.item.title}</Typography>
            <Typography level="body-md">{props.item.description}</Typography>
            <Button
                target="_blank"
                component="a"
                href={`https://www.youtube.com/watch?v=${props.item.video_id}`}
                size="sm"
                color="danger"
                sx={{ width: '200px', marginTop: 1 }}
                startDecorator={<FontAwesomeIcon
                    icon={faYoutube}
                    className="cursor-pointer"
                    size="lg"
                  />}
            >Go to video</Button>
        </CardContent>
        
    </Card>
  )
}