import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material"
import XIcon from '@mui/icons-material/X';

export const MuiNavbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <IconButton size="large" edge='start' color="inherit" aria-label="logo">
                <XIcon />
            </IconButton>
            <Typography variant="h6" component='div'sx={{ flexGrow: 1 }}>
                TWITTERAPP
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button color="inherit">Features</Button>
                <Button color="inherit">About Us</Button>
                <Button color="inherit">Resources</Button>
                <Button color="inherit">Log in</Button>
            </Stack>
        
        </Toolbar>
    </AppBar>
  )
}
