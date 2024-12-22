import Box from '@mui/material/Box';


function BoardBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.dark',
      height: (theme) => theme.trelloCustom.boardBarHeight,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent:'space-between',
      gap: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      Boardbar
    </Box>
  )
}

export default BoardBar
