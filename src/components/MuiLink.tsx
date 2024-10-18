import { Stack, Link, Typography } from '@mui/material'

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={10}>
        <Link href='#' >Link</Link>
        
        <Typography variant='h6'>
            <Link href='#' color='seondary' underline='none'>
            Secondary
            </Link>
        </Typography>
    </Stack>
  )
}
