import React from 'react'
import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
// import products from '../products'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');
            setProduct(data);
        }
        fetchProducts();
    },[])
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {product.map((p) => (
                    <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={p} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen