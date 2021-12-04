import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

export const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          width="200px"
          style={{ objectFit: 'contain' }}
          image={product.productImage}
          title={product.productName}
        ></CardMedia>
        <CardContent>
          <Typography>{product.productName}</Typography>
          <Typography>{product.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
