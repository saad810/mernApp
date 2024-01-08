import React from 'react'
import { Card, Badge } from 'react-bootstrap';
import '../assets/styles/index.css'
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img variant="top" src={product.image} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
                </Link>
                <Card.Text as='h3'>
                    <strong>{product.price}</strong>
                </Card.Text>
                <Card.Text as='div'>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                    />
                </Card.Text>

                <Badge bg="secondary">{product.category}</Badge>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>

    )
}

export default Product