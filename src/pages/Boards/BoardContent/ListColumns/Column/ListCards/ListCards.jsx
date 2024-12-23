import { Box } from '@mui/material'
import Card from './Card/Card';

function ListCards() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 1.5,
      padding: '0 4px',
      margin: '0 4px',
      height: 'auto',
      overflow: 'auto',
      maxHeight: (theme) =>
        `calc(
    ${theme.trelloCustom.boardBarContentHeight} - 
    ${theme.spacing(5)} - 
    ${theme.trelloCustom.columnHeaderHeight} - 
    ${theme.trelloCustom.columnFooterHeight})`,
    }}>
      <Card />
      <Card temporaryHideMedia/>
      <Card temporaryHideMedia/>
      <Card temporaryHideMedia/>
      <Card temporaryHideMedia/>
      <Card temporaryHideMedia/>
      <Card temporaryHideMedia/>
      <Card temporaryHideMedia/>
      <Card temporaryHideMedia/>
    </Box>
  )
}

export default ListCards