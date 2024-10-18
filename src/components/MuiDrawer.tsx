import { Drawer, Box, Typography, IconButton, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
    <IconButton
    size='large'
    edge='start'
    color='inherit'
    aria-label='logo'
    onClick={() => setIsDrawerOpen(true)}
    >
      <MenuIcon />
    </IconButton>
    <Drawer 
    anchor='left' 
    open={isDrawerOpen} 
    onClose={() => setIsDrawerOpen(false)}
    >
        <Box p={1} width='250px' role='presentation'>
            <Typography variant='h6' component='div' textAlign='center' >
                SIDE PANEL
            </Typography>
            <Typography pl={1}>
            <Link href='#' color='primary' underline='none'>
                About
            </Link>
            </Typography>

            <Typography pl={1}>
            <Link href='#' color='primary' underline='none'>
                Home
            </Link>
            </Typography>

            <Typography pl={1}>
            <Link href='#' color='primary' underline='none'>
                Contact
            </Link>
            </Typography>

        </Box>
    </Drawer>
    </>
  )
}
