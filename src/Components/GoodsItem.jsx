import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function GoodsItem(props) {
  let nameTitle = "Other"
  let description = "Other"
  let srcImage = "https://fortnite-api.com/images/cosmetics/br/shoes_clinicraisebarge/icon.png"

  const {
    finalPrice,
    offerId,
    brItems = [],
    tracks = [],
  } = props;

  if (brItems.length > 0) {
    nameTitle = brItems[0].name
    description = brItems[0].description
    srcImage = brItems[0].images.featured
  } else if (tracks.length > 0) {
    nameTitle = tracks[0].title
    srcImage = tracks[0].albumArt
  }

  return (
    <Card sx={{display: "flex", flexDirection: "column"}}>
      <CardMedia
        component="img"
        image={srcImage}
        alt=""
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{my: 1.3,}}
        >
          {finalPrice} V
        </Typography>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
        >
          {nameTitle}
        </Typography>
        <Typography
          variant="body2"
          sx={{color: 'text.secondary'}}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{mt: 'auto'}}>
        <Button
          fullWidth
          sx={{color: "white", backgroundColor: "green"}}
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
        >Add to cart</Button>
      </CardActions>
    </Card>
  );
}