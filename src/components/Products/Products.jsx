import React from 'react';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import Product from './Product/Product';
import useStyles from './Styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) 
    return <div className={classes.sppiner.root}>
            <LinearProgress />
          </div>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
