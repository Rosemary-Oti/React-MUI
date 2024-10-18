import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import CopyIcon from '@mui/icons-material/CopyAllOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'


export const MuiSpeedDial = () => {
  return (
    <SpeedDial 
      ariaLabel='Speed Dial Navigation'
      sx={{position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction icon={<CopyIcon />} tooltipTitle='copy' tooltipOpen/>
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle='print' tooltipOpen/>
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle='share' tooltipOpen/>
    </SpeedDial>
  )
}
