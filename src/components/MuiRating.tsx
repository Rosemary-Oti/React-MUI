import { useState } from 'react'
import { Stack, Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null)
    console.log({ value })
    const handleChange = (
        _event: React.ChangeEvent<{}>,
        newValue: number | null
    ) => {
        setValue(newValue)
    }


  return (
    <Stack spacing={2}>
        <Rating 
        value={value} 
        onChange={handleChange}
        precision={0.5}
        size='large'

        // ADD SOME PROPS
        // you can import and use these icons if you dont want to use the default star rating icons
        // you can also add color to change the default rating icon color
        icon={<FavoriteIcon fontSize='inherit' />}   
        emptyIcon={<FavoriteBorderIcon fontSize='inherit'  />}

        // you can use 'highlightSelectedOnly' prop which is suitable when your you're collecting feedbacks using emojis
        

        />
    </Stack>
  )
}
