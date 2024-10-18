import { Box, Stack, Divider, Grid, Paper } from '@mui/material'

export const MuiLayout = () => {
  return (

    // STACK component is usefull for one-directional layout, while 
    // GRID COMPONENT is usefull for two-dimensional layout
<>
<Stack 
    sx={{border: '2px solid'}}
    direction='row'
    spacing={2}
    divider={<Divider orientation='vertical' flexItem />}
    >
    <Box sx={{
        backgroundColor: 'warning.main',
        color: 'white',
        height: '100px',
        width: '100px',
        padding: '16px',
        '&:hover': {
            backgroundColor: 'warning.light'
        },
    }}
    >
        MuiLayout
    </Box>
    <Box 
        display='flex'
        height='100px'
        width='100px'
        bgcolor='success.light'
        p={2}
    >
        MuiLayout
    </Box>
</Stack>

            {/* GRID component */}
            {/* Usefull for creating two-dimensional and responsive layout */}
<Grid container my={4} rowSpacing={2} columnSpacing={1}>
    <Grid item xs={6}>
        <Box bgcolor='primary.light' p={2}>
        Item 1
        </Box>
    </Grid>
    <Grid item xs={6}>
        <Box bgcolor='primary.light' p={2}>
        Item 2
        </Box>
    </Grid>
    <Grid item xs={6}>
        <Box bgcolor='primary.light' p={2}>
        Item 3
        </Box>
    </Grid>
    <Grid item xs={6}>
        <Box bgcolor='primary.light' p={2}>
        Item 4
        </Box>
    </Grid>
</Grid>

                         {/* PAPER COMPONENT */}
{/* Can be used in your app designs to establish sections of UI and also visual hierarchy */}
<Paper sx={{padding: '32px'}} elevation={6}>
<Stack 
    sx={{border: '2px solid'}}
    direction='row'
    spacing={2}
    divider={<Divider orientation='vertical' flexItem />}
    >
    <Box sx={{
        backgroundColor: 'warning.main',
        color: 'white',
        height: '100px',
        width: '100px',
        padding: '16px',
        '&:hover': {
            backgroundColor: 'warning.light'
        },
    }}
    >
        MuiLayout
    </Box>
    <Box 
        display='flex'
        height='100px'
        width='100px'
        bgcolor='success.light'
        p={2}
    >
        MuiLayout
    </Box>
</Stack>

            {/* GRID component */}
            {/* Usefull for creating two-dimensional and responsive layout */}
<Grid container my={4} rowSpacing={2} columnSpacing={1}>
    <Grid item xs={6}>
        <Box bgcolor='primary.light' p={2}>
        Item 1
        </Box>
    </Grid>
    <Grid item xs={6}>
        <Box bgcolor='primary.light' p={2}>
        Item 2
        </Box>
    </Grid>
    <Grid item xs={6}>
        <Box bgcolor='primary.light' p={2}>
        Item 3
        </Box>
    </Grid>
    <Grid item xs={6}>
        <Box bgcolor='primary.light' p={2}>
        Item 4
        </Box>
    </Grid>
</Grid>
</Paper>
</>
  )
}
