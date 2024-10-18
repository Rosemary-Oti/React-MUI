import { Stack, TextField, InputAdornment } from '@mui/material'
import { useState } from 'react'

export const MuiTextField = () => {
    const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='NAME' variant='outlined' color='secondary' />
            <TextField label='NAME' variant='filled' color='warning'/>
            <TextField label='NAME' variant='standard' color='error' />
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField 
            label='password' 
            required 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={
                !value ? 'Required' : 'Do not share your password'}
            />
            <TextField label='Password' type='password' helperText='Do not share your password with anyone' color='success'/>
            <TextField label='Field Input' required placeholder='Email' />
            <TextField label='Read only' InputProps={{ readOnly: true}}  />
            <TextField placeholder='Email' size='medium' />
            <TextField placeholder='Email' size='small' />
        </Stack>

        <Stack spacing={2} direction='row'>
            <TextField label='Amount' InputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}/>
            <TextField label='Weight' InputProps={{
                endAdornment: <InputAdornment position='end'>kg</InputAdornment>
            }}/>
            <TextField label='Password' InputProps={{
                endAdornment: <InputAdornment position='end'></InputAdornment>
            }}/>
        </Stack>
        
    </Stack>
    
  )
}
