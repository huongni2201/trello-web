import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'


function BoardContent() {

  return (
    <Box sx={{
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1976d2' : 'primary.main'),
      height: (theme) => theme.trelloCustom.boardBarContentHeight,
      width: '100%',
      pading: '10px 0',
      p: 2
    }}>
      <ListColumns />
    </Box >
  )
}

export default BoardContent
