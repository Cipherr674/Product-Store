import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Box, LinearProgress, Stack } from '@mui/material';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
        <LinearProgress color="success" />
      </Stack>
    );
  }

  return (
    <Box className="container" sx={{ padding: 4, backgroundColor: '#f8f9fa' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          marginBottom: 4,
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        Featured Products
      </Typography>
      <Box
        className="products-grid"
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        }}
      >
        {data.map((product) => (
          <Card
            key={product.id}
            className="product-card"
            sx={{
              maxWidth: 345,
              borderRadius: 3,
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
              },
              backgroundColor: '#ffffff',
            }}
          >
            <CardMedia
              component="img"
              className="product-image"
              image={product.image}
              alt={product.title}
              sx={{
                height: 220,
                objectFit: 'contain',
                backgroundColor: '#f4f4f4',
                padding: 2,
              }}
            />
            <CardContent className="product-content">
              <Typography
                variant="h6"
                className="product-title"
                sx={{ fontWeight: 'bold', color: '#333', marginBottom: 1 }}
              >
                {product.title}
              </Typography>
              <Typography
                variant="body2"
                className="product-price"
                sx={{ fontSize: '1rem', color: '#555', marginBottom: 1 }}
              >
                ${product.price.toFixed(2)}
              </Typography>
              <Typography
                variant="body2"
                className="product-rating"
                sx={{ color: '#777' }}
              >
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </Typography>
            </CardContent>
            <CardActions
              className="product-actions"
              sx={{ justifyContent: 'space-between', paddingX: 2, paddingBottom: 2 }}
            >
              <Button
                size="small"
                variant="outlined"
                sx={{
                  color: '#007bff',
                  borderColor: '#007bff',
                  '&:hover': {
                    backgroundColor: '#e6f2ff',
                  },
                }}
              >
                Add to Cart
              </Button>
              <Button
                size="small"
                variant="contained"
                sx={{
                  backgroundColor: '#007bff',
                  '&:hover': {
                    backgroundColor: '#0056b3',
                  },
                }}
              >
                Share
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
