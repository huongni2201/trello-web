import { Box } from '@mui/material'
import Card from './Card/Card';



import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

function ListCards({ cards }) {

  return (
    <SortableContext items={cards?.map(c => c._id)} strategy={verticalListSortingStrategy}>
      <Box
        sx={{
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

        {cards.map(card => <Card key={card._id} card={card} />)}
      </Box>
    </SortableContext >
  )
}

export default ListCards