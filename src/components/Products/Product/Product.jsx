import {React} from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';

import useStyles from './Styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const handleAddToCart = () => onAddToCart(product.id, 1);
  const  truncate = (str, numberOfWords) => {
    return str.split(" ").splice(0,numberOfWords).join(" ") +"...";
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia className={classes.media} image={product.image} title={product.title} height="140" />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h2" component="h2">
            {product.title}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: truncate(product.description,25) }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      </CardActionArea>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button size="small" color="primary" className={classes.cardButton}>
          ADD TO CART
        </Button>
        <Button size="small" color="primary" className={classes.cardButton}>
          LEARN MORE
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;