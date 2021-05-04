import React,{useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row,Col,Image,ListGroup,Button,Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

function Productscreen({match}) {
    const[product, setProduct] = useState([])

    useEffect(()=>{
        async function fetchProduct(){
            const {data} = await axios.get(`/api/products/${match.params.id}`);
            setProduct(data);
        };
        fetchProduct();
    },[]);
    return (
        <div>
            <Link to="/" className="btn btn-light my-3">Go back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} Reviews`} color={'#f8e825'} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item variant='flush'>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item variant='flush'>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock >0 ? 'In Stock' : "Out Stock"} 
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup>
                                <Button 
                                className="btn-block" 
                                type='button' 
                                disabled={product.countInStock === 0} >
                                    Add to Cart
                                </Button>
                            </ListGroup>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Productscreen
