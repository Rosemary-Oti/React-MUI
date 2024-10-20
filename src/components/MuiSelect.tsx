import { Stack, Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([])
  console.log({ countries })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Stack>
    <h2>Basic Dropdown menu/component using materal UI</h2>
    <Box width='250px'>
      <TextField 
      label='Select Countries'
      select
      value={countries}
      onChange={handleChange}
      fullWidth
      SelectProps={{
        multiple: true,
      }}
      size='small'
      color='secondary'
      helperText='Please select your country'
      >
      <MenuItem value='NG'>NIGERIA</MenuItem>
      <MenuItem value='US'>USA</MenuItem>
      <MenuItem value='CAD'>CANADA</MenuItem>
      <MenuItem value='IN'>INDIA</MenuItem>
      <MenuItem value='SA'>SOUTH AFRICA</MenuItem>
      </TextField>
    </Box>
    </Stack>
  )
}
