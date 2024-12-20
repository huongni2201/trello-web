
import Box from '@mui/material/Box';
import ModeSelect from '~/components/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from './Menus/Profiles';


function AppBar() {
  return (
    <Box sx={{
      height: (theme) => theme.trelloCustom.appBarHeight,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>

      {/* Navbar and Logo */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon sx={{ color: 'primary.main' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2m-8.8 15.2a1.2 1.2 0 0 1-1.2 1.2H5.8c-.66 0-1.2-.54-1.2-1.2V5.8a1.2 1.2 0 0 1 1.2-1.2h3.7c.66 0 1.2.54 1.2 1.2zm8.7-5c0 .66-.54 1.2-1.2 1.2h-3.7c-.66 0-1.2-.54-1.2-1.2V5.8c0-.66.54-1.2 1.2-1.2h3.7c.66 0 1.2.54 1.2 1.2z">
              </path>
            </svg>
          </SvgIcon>

          <Typography variant='span' sx={{ fontSize: '1.2rem', color: 'primary.main', fontWeight: 'bold' }}>Trello</Typography>
        </Box>

        <Workspaces />
        <Recent />
        <Starred />
        <Templates />

        <Button variant="outlined">Create</Button>
      </Box>

      {/* Search */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search..." type="search" size='small' />
        <ModeSelect />

        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>

        <Tooltip title="Help" sx={{ cursor: 'pointer' }}>
          <HelpOutlineIcon />
        </Tooltip>

        <Profiles/>
      </Box>

    </Box>
  )
}

export default AppBar
