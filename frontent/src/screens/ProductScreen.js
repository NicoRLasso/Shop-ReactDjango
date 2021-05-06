import React,{useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row,Col,Image,ListGroup,Button,Card,Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails } from '../actions/productActions'

function Productscreen({match}) {
    const [qty,setqty]=useState(1)

    const dispatch = useDispatch()
    const producDetails = useSelector(state => state.productDetails)
    const {loading,error,product}=producDetails
    useEffect(()=>{
        dispatch(listProductDetails(match.params.id))
    },[dispatch ,match]);

    return (
        <div>
            <Link to="/" className="btn btn-light my-3">Go back</Link>
            {loading ? <Loader/>
            : error
            ? <Message variant="danger">{error}</Message>
            :(<Row>
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
            </Row>)
            }
            
        </div>
    )
}

export default Productscreen
