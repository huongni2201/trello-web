
import { Box, Button, Menu, MenuItem } from '@mui/material'
import NoteAddIcon from '@mui/icons-material/NoteAdd';

import Column from './Column/Column'


function ListColumns() {
  return (
    <Box sx={{
      bgcolor: 'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '*::-webkit-scrollbar-track': { margin: 2 }
    }}>
      <Column />
      <Column />
      <Column />


      {/* Box add new column CTA */}
      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        mx: 2,
        borderRadius: '6px',
        height: 'fit-content',
        bgcolor: '#ffffff3d'
      }}>
        <Button sx={{
          outline: 'none',
          border: 'none',
          color: 'white',
          width: '100%',
          paddingLeft: 2.5,
          paddingY: 1,
        }} variant="outlined" startIcon={<NoteAddIcon />}>Add new column</Button>
      </Box>

    </Box>
  )
}

export default ListColumns