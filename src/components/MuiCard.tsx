import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width='350px'>
        <Card>
            <CardMedia 
            component='img'
            height='20'
            image='https://source.unsplash.com'
            alt='unsplash image'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>React</Typography>
                <Typography variant='body2' color='text.secondary'>React is a free and open-source front-end JavaScript library 
                for building user interfaces based on components by Facebook Inc.</Typography>
            </CardContent>
            <CardActions>
                <Button>Share</Button>
                <Button>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
