import { Card as MuiCard } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function Card({ card }) {

  const shouldShowCardActions = () => {
    return !!card?.memberIds?.length || !!card?.component?.length || !!card?.attachments?.length
  }

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: card._id,
    data: { ...card }
  });

  const dndKitCardStyles = {
    touchAction: 'none',

    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? '1px solid #ccc' : undefined
  };


  return (
    <MuiCard
      ref={setNodeRef} style={dndKitCardStyles} {...attributes} {...listeners}
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        width: '100%',
        overflow: 'unset',
        display: card?.FE_PlaceholderCard ? 'none' : 'block'
      }}>

      {card?.cover &&
        <CardMedia sx={{ height: 140 }} component="img" image={card?.cover} />
      }

      <CardContent sx={{
        p: 1.5,
        '&:last-child': { p: 2.5 },
        '& .MuiTypography-root': {
          fontSize: '0.875rem'
        }
      }} >
        <Typography> {card?.title} </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {card?.description}
        </Typography>
      </CardContent>

      {shouldShowCardActions() &&
        <CardActions sx={{
          p: '0 4px 8px 4px'
        }}>
          {!!card?.memberIds?.length && <Button size="small" startIcon={<GroupIcon />}>
            {card?.memberIds?.length}
          </Button>}

          {!!card?.component?.length && <Button size="small" startIcon={<CommentIcon />}>
            {card?.component?.length}
          </Button>}

          {!!card?.attachments?.length && <Button size="small" startIcon={<AttachmentIcon />}>
            {card?.attachments?.length}
          </Button>}
        </CardActions>
      }


    </MuiCard>
  )
}

export default Card