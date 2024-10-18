import { Stack, Button, IconButton, ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
  return (
<Stack spacing={4}>
    <h2>Different BUTTON types using React Material UI</h2>
    <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://google.com'>text</Button>
        <Button variant='outlined'>outlined</Button>
        <Button variant='contained'>contained</Button>
    </Stack>


    <h2>Different PALETTE colors and their significance using React Material UI n contained button</h2>
    <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>PRIMARY</Button>
        <Button variant='contained' color='secondary'>SECONDARY</Button>
        <Button variant='contained' color='error'>ERROR</Button>
        <Button variant='contained' color='warning'>WARNING</Button>
        <Button variant='contained' color='info'>INFO</Button>
        <Button variant='contained' color='success'>SUCCESS</Button>
    </Stack>

    <h2>Different button sizes</h2>
    <Stack spacing={2} direction='row'>
        <Button variant='contained' size='small'>SMALL</Button>
        <Button variant='contained' size='medium'>MEDIUM</Button>
        <Button variant='contained' size='large'>LARGE</Button>
    </Stack>

    <h2>Using icons</h2>
    <Stack spacing={2} direction='row'>
        <Button variant='contained' endIcon={<SendIcon />} onClick={() => alert ('click ASAP')}>SEND</Button>
        <Button variant='contained' startIcon={<SendIcon />} disableElevation>SEND</Button>
        <IconButton aria-label='send' color='success' size='small'><SendIcon /></IconButton>
    </Stack>

    <Stack  direction='row' spacing={2}>
        <h2>ButtonGroup</h2>
        <ButtonGroup variant='outlined' arial-label='alignment button group'>
            <Button onClick={() => alert('click me')}>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>

        <ButtonGroup variant='contained'>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>

        <ButtonGroup variant='text'>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>
    </Stack>

    
</Stack>
  )
}
