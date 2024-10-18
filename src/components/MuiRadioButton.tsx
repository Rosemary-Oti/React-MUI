import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material'
import { useState } from 'react'

export const MuiRadioButton = () => {
    const [value, setValue] = useState('')
    console.log({value})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
  return (
    <Box>
        <FormControl >
            <FormLabel id='job-experience-group-label'>
                Years of experience
            </FormLabel>
            <RadioGroup
            name='job-experience-group-label'
            aria-labelledby='job-experience-group-label'
            value={value}
            onChange={handleChange}
            
            >
                <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
                <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                <FormControlLabel control={<Radio />} label='6-8' value='6-8' />
                <FormControlLabel control={<Radio />} label='9-11' value='9-11' />
                <FormControlLabel control={<Radio />} label='12-14' value='12-14' />
                <FormControlLabel control={<Radio />} label='15-17' value='15-17' />
                <FormControlLabel control={<Radio />} label='18-20' value='18-20' />
                <FormControlLabel control={<Radio />} label='21-23' value='21-23' />
            </RadioGroup>
            <FormHelperText >Ignore invalid range</FormHelperText>
        </FormControl>
    </Box>
  )
}
