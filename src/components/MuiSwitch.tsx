import { Box, FormControlLabel, FormControl, FormGroup, FormLabel, Switch } from '@mui/material'
import { useState } from 'react'

export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    console.log({ checked })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }
  return (
    <Box>
        <FormControlLabel 
        label='Dark mode'  
        control={<Switch  checked={checked} onChange={handleChange}/>}
        />

<Box>
            <FormControl>
                <FormLabel>SKILLS</FormLabel>
                <FormGroup row>
                    <FormControlLabel 
                        label='HTML'
                        value='css'
                        control={<Switch checked={checked} onChange={handleChange}/>}
                    />
                    <FormControlLabel 
                        label='CSS'
                        value='html'
                        control={<Switch checked={checked} onChange={handleChange}/>}
                    />
                    <FormControlLabel 
                        label='JAVASCRIPT'
                        value='javascript'
                        control={<Switch checked={checked} onChange={handleChange}/>}
                    />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}
