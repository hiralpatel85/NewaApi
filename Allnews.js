import { Row, Col, Card, Container } from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';


function AllNews() {
    const [mydata, setData] = useState([]); const apiget = () => {
        fetch('https://inshorts.me/news/all?offset=0&limit=21')
            .then((response) => response.json())
            .then((json) => {
                console.log(json); setData(json.data.articles);


            });
    };


    useEffect(() => {
        apiget();
        const interval = setInterval(() => { apiget(); }, 500000); return () => clearInterval(interval);
    }, []);


    return (
        <Container fluid>
            <Row xs={1} md={2} lg={3} className='g-4'>
                {
                    mydata.map((value, index) => {
                        return (
                            <>
                                <Col className='container-fluid mt-4'>
                                    <Card style={{ height: '37rem' }}>
                                        <Card.Img variant="top" src={value.imageUrl} style={{ height: '17rem' }} />
                                        <Card.Body>
                                            <Card.Title>{value.title}</Card.Title>
                                            <Card.Text>
                                                {value.content}
                                            </Card.Text>
                                            <footer className='blockquote-footer'> countryCode:{value.countryCode} <br></br> authorName : {value.authorName}
                                            </footer>
                                        </Card.Body>
                                    </Card>


                                </Col>
                            </>
                        )
                    }
                    )
                }
            </Row>
        </Container>
    );
}
export default AllNews;
