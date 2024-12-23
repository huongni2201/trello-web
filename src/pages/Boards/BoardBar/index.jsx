import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const MENU_STYLES = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      height: (theme) => theme.trelloCustom.boardBarHeight,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'primary.main ' }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />} label="Trello Stack Board" clickable />

        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />} label="Public/Private Workspace" clickable />

        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />} label="Add To Google Drive" clickable />

        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />} label="Automation" clickable />

        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />} label="Filters" clickable />
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>

        {/* Avatar Group */}
        <AvatarGroup
          max={6}
          sx={{
            '& .MuiAvatarGroup-avatar': {
              width: '34px',
              height: '34px'
            }
          }}
        >
          <Avatar alt="Remy Sharp" src="https://24hstore.vn/upload_images/images/hinh-nen-anime/hinh-nen-anime-35(1).jpg" />
          <Avatar alt="Remy Sharp" src="https://haycafe.vn/wp-content/uploads/2023/06/hinh-anh-anime-nu-do-AI-ve.jpg" />
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/236x/1d/b5/4e/1db54e832b76e7ab8964e31a25523885.jpg" />
          <Avatar alt="Remy Sharp" src="https://thuthuatnhanh.com/wp-content/uploads/2022/04/Anh-anime-nu-buon.jpeg" />
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/236x/c0/4e/13/c04e13d68c8dcd2920ca03f44c836b4e.jpg" />
          <Avatar alt="Remy Sharp" src="https://image.winudf.com/v2/image1/Y29tLmJveXMuYWxpYWJ1bmFzc2FyX3NjcmVlbl8wXzE2MzIzMDgzNTBfMDYz/screen-0.jpg?fakeurl=1&type=.jpg" />
          <Avatar alt="Remy Sharp" src="https://topanh.com/wp-content/uploads/2024/02/anh-anime-cute-23.jpg" />
          <Avatar alt="Remy Sharp" src="https://24hstore.vn/upload_images/images/hinh-nen-anime/hinh-nen-anime-35(1).jpg" />
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/236x/1d/b5/4e/1db54e832b76e7ab8964e31a25523885.jpg" />
          <Avatar alt="Remy Sharp" src="https://thuthuatnhanh.com/wp-content/uploads/2022/04/Anh-anime-nu-buon.jpeg" />
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/236x/c0/4e/13/c04e13d68c8dcd2920ca03f44c836b4e.jpg" />
          <Avatar alt="Remy Sharp" src="https://image.winudf.com/v2/image1/Y29tLmJveXMuYWxpYWJ1bmFzc2FyX3NjcmVlbl8wXzE2MzIzMDgzNTBfMDYz/screen-0.jpg?fakeurl=1&type=.jpg" />
          <Avatar alt="Remy Sharp" src="https://topanh.com/wp-content/uploads/2024/02/anh-anime-cute-23.jpg" />
        </AvatarGroup>
      </Box>

    </Box>
  )
}

export default BoardBar
