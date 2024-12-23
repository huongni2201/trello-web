import { Card as MuiCard } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        width: '100%',
        overflow: 'unset'
      }}>
        <CardContent sx={{
          p: 1.5,
          '&:last-child': { p: 2.5 },
          '& .MuiTypography-root': { fontSize: '0.875rem' }
        }}>
          <Typography> Card 01 </Typography>
        </CardContent>
      </MuiCard>
    )
  }

  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      width: '100%',
      overflow: 'unset'
    }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2023_11_8_638350518809417884_100-hinh-nen-anime-nu-dep-cho-dien-thoai-may-tinh-an-tuong-hon.jpg"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }} >
        <Typography> Anime </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{
        p: '0 4px 8px 4px'
      }}>
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<CommentIcon />}>15</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>10</Button>

      </CardActions>
    </MuiCard>
  )
}

export default Card